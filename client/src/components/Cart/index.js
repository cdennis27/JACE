import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
// require('dotenv').config();
import emailjs from '@emailjs/browser';


const stripePromise = loadStripe('pk_test_51MWsBqFedoDMRamPBsp4YRZEOTRVhMECzdszYpVVduHdCkuoBnZSyk6G7UpjWFIk0VVfIcVUwPhX2SbGhtWpQjSE00UplXsjGu');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function sendReceiptEmail() {
    const userEmail = Auth.getProfile().data.email;
    let cartItemsString = '';
    state.cart.forEach((item) => {
      cartItemsString += `${item.title} x ${item.purchaseQuantity} - $${(item.price * item.purchaseQuantity).toFixed(2)}\n`;
    });

    const templateParams = {
      to_email: userEmail,
      cartItems: cartItemsString,
      total: calculateTotal(),
    };

    emailjs
      .send(
        '', // change to emailjs service id
        '', // change to emailjs template id
        templateParams,
        '' // change to emailjs public key 
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response.status, response.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log('Email failed to send...', error);
        }
      );
  }

  function submitCheckout() {
    sendReceiptEmail();

    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🍽️
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        x
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="total">
            <strong>Total: ${calculateTotal()}</strong>
          </div>
          {Auth.loggedIn() ? (
            <button onClick={submitCheckout} className="checkout-btn">Checkout</button>
          ) : (
            <span>(log in to check out)</span>
          )}
        </div>
      ) : (
        <h7>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your plate yet!
        </h7>
      )}
    </div>
  );
};

export default Cart;

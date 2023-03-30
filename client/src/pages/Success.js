import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import "./style.css";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        console.log('Order placed! You will now be redirected to the home page.');
        localStorage.setItem("tableId", "");
        console.log(localStorage.getItem("tableId"));
        window.location.assign('/');
      }, 7000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="success-children">
      <Jumbotron>
        <h2>💸👍</h2>
        <h2>Your server will bring your order when ready!</h2>
        <h4>You will now be redirected to the home page</h4>
      </Jumbotron>
    </div>
  );
}

export default Success;

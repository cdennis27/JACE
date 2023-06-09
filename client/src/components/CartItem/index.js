import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row cart-overall">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div className="cart-item">
        <div className="quantity-remove">
            <div className="quantity">{item.name}</div>
            <div className="remove">{item.price}</div>
        </div>
        <div className="quantity-remove">
          <div className="quantity">
            <span>Qty:</span>
            <input
              type="number"
              value={item.purchaseQuantity}
              onChange={onChange}
            />
          </div>
          <span
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            className="remove"
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;



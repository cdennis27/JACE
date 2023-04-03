import React from 'react';
import { Link } from 'react-router-dom';
import './Closing.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_KITCHEN_ORDERS } from '../utils/queries';
import { UPDATE_KITCHEN_ORDER } from '../utils/mutations';

function Closing() {

  const valid = localStorage.getItem('employee');
  if (valid !== 'true') {
    window.location.assign('/login');
  }

  const { data } = useQuery(QUERY_ALL_KITCHEN_ORDERS);
  let kitOrder;

  if (data) {
    kitOrder = data;
    console.log(kitOrder);
  }



  return (
    <>
      <div className="container my-1 overview">
        <Link to="/" className="links-to-go">← Home</Link>
        <div className="link-tab-overview">
          <Link to="/pendingorders" className="link-tab">Orders</Link>
          <Link to="/admin" className="link-tab">Admin</Link>
          <Link to="/closing" className="link-tab-selected">Closing</Link>
        </div>

        {kitOrder ? (

          <div className="container-orders">

            {kitOrder.kitchenOrder.map((order) => (
              <div key={order._id} className="order">
                <div className='order-header'>
                  <div className='order-header-one'>
                    <h5 className='order-date'>
                      {new Date(parseInt(order.purchaseDate)).toLocaleString()}
                    </h5>
                    <h5>
                      Table: {order.tableNumber}
                    </h5>
                  </div>
                  <h5>
                    Customer: {order.userName}
                  </h5>
                </div>
                <div className="products">
                  {order.products.map(({ _id, name }, index) => (
                    <div key={index} >
                      <p className="hidden">{_id}</p>
                      <p className='products-items'>{name}</p>
                    </div>
                  ))}
                </div>
                <a name={order._id} id={order.status} className="update-order order-status">{order.status}</a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Closing;

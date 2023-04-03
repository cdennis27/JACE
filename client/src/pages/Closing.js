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
      <div className="container my-1">
        <Link to="/admin" className="links-to-go">← Admin</Link>
        <Link to="/pendingorders" className="links-to-go">← Pending Orders</Link>
        <h1 className="">Closing</h1>

        {kitOrder ? (
          
          <div className="container-orders">
            
            {kitOrder.kitchenOrder.map((order) => (
              <div key={order._id} className="order">
                
                <h5>
                  {new Date(parseInt(order.purchaseDate)).toLocaleString()}
                </h5>
                <h5>
                  Customer: {order.userName} Table: {order.tableNumber} 
                </h5>

                {order.products.map(({ _id, name }, index) => (
                  <div key={index} className="products">
                    <p className="hidden">{_id}</p>
                    <p>{name}</p>

                  </div>
                ))}
              <a name={order._id} id={order.status} className="update-order order-status " >{order.status}</a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Closing;

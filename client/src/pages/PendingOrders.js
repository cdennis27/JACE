import React from 'react';
import { Link } from 'react-router-dom';
import './PendingOrders.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_KITCHEN_ORDERS } from '../utils/queries';
import { UPDATE_KITCHEN_ORDER } from '../utils/mutations';

function PendingOrders() {

  const valid = localStorage.getItem('employee');
  if (valid !== 'true') {
    window.location.assign('/login');
  }
  const { data } = useQuery(QUERY_ALL_KITCHEN_ORDERS);
  let kitOrder;

  if (data) {
    kitOrder = data;
    // console.log(kitOrder);
  }

  const [updateKitchenOrder] = useMutation(UPDATE_KITCHEN_ORDER);

  const handleUpdateOrder = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    let id = event.target.name;

    // console.log(id);
    const mutationResponse = await updateKitchenOrder({
      variables: {
        id: id,

      },
      return: window.location.reload(),
    });
    // console.log("mutationResponse data");
    const status = mutationResponse.data.updateKitchenOrder.tableNumber;
    // console.log(status);

  };

  setTimeout(() => {
    // console.log('Order placed! You will now be redirected to the home page.');

    window.location.reload();
  }, 5000);
  function stopFunction() {
    clearTimeout(setTimeout);
    window.location.assign("/admin");

  };


  return (
    <>
      <div className="container my-1 overview">
        <div className="link-tab-overview">
          <Link to="/" className="link-tab">Home</Link>
          <Link to="/pendingorders" className="link-tab-selected">Orders</Link>
          <Link to="/admin" className="link-tab">Admin</Link>
          <Link to="/closing" className="link-tab">Closing</Link>
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

                {order.products.map(({ _id, name }, index) => (
                  <div key={index} className="products">
                    <p className="hidden">{_id}</p>
                    <p>{name}</p>

                  </div>
                ))}
                <a name={order._id} id={order.status} className="update-order order-status" onClick={handleUpdateOrder}>{order.status}</a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default PendingOrders;

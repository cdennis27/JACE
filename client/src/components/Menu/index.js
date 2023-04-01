import React, { useEffect } from 'react';
import MenuItems from '../MenuItems';
import {menuData} from '../../pages/menuData';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);
console.log(data);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const handleDownloadMenu = () => {
    const doc = new jsPDF();
    const heading = 'Menu';
    const textWidth = doc.getStringUnitWidth(heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;

    // Get page width and set x position for the heading
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    doc.text(heading, x, 10);
    doc.autoTable({
      head: [['Name', 'Description', 'Price']],
      body: menuData.map(({ name, description, price }) => [name, description, price])
    });
    doc.save("menu.pdf");
  };



  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <MenuItems
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>Don't have an account? Download our menu!!</h3>
      )}
      <button onClick={handleDownloadMenu}>
        Download Menu
      </button>
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;





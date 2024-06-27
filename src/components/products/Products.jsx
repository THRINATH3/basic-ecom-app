import React, { useState, useEffect } from 'react';
import './Products.css';
import Product from '../product/Product';

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let res = await fetch('http://localhost:3000/products');
    let products = await res.json();
    setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map((productObj) => (
          <Product key={productObj.id} productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Products;

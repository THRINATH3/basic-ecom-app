import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { Userlogincontext } from '../../context/Userlogincontext';
import { AiFillDelete } from "react-icons/ai";
function Cart() {
  const { currentUser } = useContext(Userlogincontext);
  const [cartItems, setCartItems] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch(`https://user-api-q5az.onrender.com/user-cart?username=${currentUser.username}`);
      const cartItems = await res.json();
      setCartItems(cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }
  async function deletproduct(productId) {
    try {
      const res = await fetch(`http://localhost:3000/user-cart/${productId}`, {
        method: "DELETE"
      });
      console.log(res); // Optional: Log response for debugging
      if (res.status === 200) {
        getProducts(); // Refresh cart items after deletion
      } else {
        console.error(`Failed to delete product with ID ${productId}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='cart-container mx-5'>
      {
        cartItems.length === 0 ? (
          <p className='display-1 text-danger text-center'>Cart is Empty</p>
        ) : (
          <table className='table table-bordered text-center'>
            <thead className='table-dark'>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Brand</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.brand}</td>
                    <td><button className="btn" onClick={()=>deletproduct(item.id)}><AiFillDelete className='text-warning '/></button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default Cart;

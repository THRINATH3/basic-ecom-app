import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { Userlogincontext } from '../../context/Userlogincontext';

function Product({ productObj }) {
  let {currentUser}=useContext(Userlogincontext)
  async function addProduct(productobj)
  {
    productObj.username=currentUser.username;
    let res=await fetch('https://user-api-q5az.onrender.com/user-cart',{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(productObj)}
    )
    if(res.status==201)
      {
        console.log('Product is added')
      }
  }
  return (
    
    <div className="col mb-4">
    <div className='card text-center h-100'>
      <div className='card-body d-flex flex-column justify-content-between bg-light'>
        <p className='fs-2 phil text-secondary'>
          {productObj.title}
        </p>
        <p className='phil text-danger'>
          {productObj.brand}
        </p>
        <p className='lead'>
          {productObj.description}
        </p>
        <p className='phil text-warning'>
          ${productObj.price}
        </p>
        <button className='btn btn-success mt-auto kk' onClick={()=>addProduct(productObj)}>
          Add To Cart
        </button>
      </div>
      </div>
    </div>
  );
}

export default Product;

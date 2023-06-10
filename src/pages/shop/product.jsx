import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import '../../App.css' ;


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems} = useContext(ShopContext);
  const [amount, setAmount] = useState(0);  
  console.log(amount);
 
  

  return (
    <div className='container mx-auto'>
      <div className='products '>
        <div className='product w-[70%] mx-auto text-center flex flex-col justify-center items-center'>
          <img src={productImage} alt="#" />
          <div className="description">
            <p className='pt-3'> <b>{productName}</b> </p>
            <p> ${price} </p>
            <div className='actions mt-2'>
              <button 
              className={`sell-btn bg-red-700 px-3 py-1 rounded-xl hover:bg-red-500 ${cartItems[id]  === 0 ? 'opacity-75' : ''}`}
              onClick={() => {removeFromCart(id);
              setAmount(cartItems[id] - 1)}}
              disabled={cartItems[id] === 0}
              >Sell</button>
              <span className='amount mx-2'>{cartItems[id]}</span>
              <button 
              className='buy-btn bg-green-700 px-3 py-1 rounded-xl hover:bg-green-500'
              onClick={() => {addToCart(id);
                setAmount(cartItems[id] + 1);}}
              >Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

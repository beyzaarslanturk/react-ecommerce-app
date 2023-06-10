import React, { useContext } from 'react'
import '../../App.css' ;
import { ShopContext } from '../../context/ShopContext';


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className='cartItem flex items-center mb-5 p-3 rounded-lg'>
        <img src={productImage} alt="#" className='w-[100px]' />
        <div className="description pl-3">
            <p className='font-bold'>
            <b> {productName} </b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
              <button
               className='bg-slate-200 w-[20px] h-[28px] rounded-sm '
               onClick={() => removeFromCart(id)}
               >-</button>
              <input className='w-[40px] text-center border-2 rounded-sm focus:outline-none' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
              <button
               className='bg-slate-200 w-[20px] h-[28px] rounded-sm'
               onClick={() => addToCart(id)}
               >+</button>
            </div>
        </div>
    </div>
  )
}

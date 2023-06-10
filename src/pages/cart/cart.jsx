import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import { PRODUCTS } from '../../products';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router';




export const Cart = () => {

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart flex flex-col items-center my-10'>
      <div>
        <h1 className='font-bold text-[27px]'>Your Cart Items</h1>
      </div>
      <div className="cartItems mt-10 w-[400px]">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ?
        <div className="checkout">
          <p className='my-5'>Subtotal: ${totalAmount}</p>
          <button
            className='py-2 px-3 bg-black text-white rounded-md me-5 text-sm'
            onClick={() => navigate("/")}
          >Continue Shopping</button>
          <button 
          className='py-2 px-3 bg-black text-white rounded-md text-sm'
          onClick={() => {
            checkout();
            navigate("/checkout");
          }}
          >Checkout</button>
        </div>
     : <h1 className='text-[20px]'> Your Cart is Empty! </h1> }
    </div>
  )
}

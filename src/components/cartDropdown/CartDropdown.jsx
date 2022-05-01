import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import CartItem from '../cartItems/CartItems.jsx'
import './CartDropdown.css'

const CartDropdown = () => {
    const cart = useSelector((state) => state.cart);


    return (
        <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cart.cartItems.length !== 0 ?
                cart.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <button 
            // history.push('/checkout')
        >CHECKOUT</button>
    </div>
    )
}

export default CartDropdown
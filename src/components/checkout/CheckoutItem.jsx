import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addToCart, clearCart, decreaseCart, getTotals, removeFromCart,} from '../../features/cart/cartSlice'
import './CheckoutItem.css'

const CheckoutItem = ({ cartItem: { image, price, title, cartQuantity } }) => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="checkout-item">
        <div className="image-container">
            <img src={image} alt="item" />
        </div>
        <span className="name">{title}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => handleDecreaseCart(cart.cartItem)}>&#10094;</div>
                <span className="value">{cartQuantity}</span>
            <div className="arrow" onClick={() => handleAddToCart (cart.cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => handleRemoveFromCart(cart.cartItem)}>&#10005;</div>
    </div>
    )
}

export default CheckoutItem
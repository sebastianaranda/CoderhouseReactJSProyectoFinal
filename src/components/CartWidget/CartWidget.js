import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from "../Cart/Cart";
import CartContext from "../context/CartContext";

export default function CardWidget() {

    const [showCart, setShowCart] = useState(false)
    const { totalPrice } = useContext(CartContext)

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (
        <div className="cardWidget">
            <FontAwesomeIcon className='icon' icon={faShoppingCart} onClick={handleCart} />
            <p className="cardWidget-cant">{totalPrice}</p>
            <Cart show={showCart} hide={handleCart} />
        </div>
    )
}
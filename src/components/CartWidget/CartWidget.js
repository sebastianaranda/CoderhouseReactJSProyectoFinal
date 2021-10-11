import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from "../Cart/Cart";

export default function CardWidget() {

    const [showCart, setShowCart] = useState(false)

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (
        <div className="cardWidget">
            <FontAwesomeIcon className='icon' icon={faShoppingCart} onClick={handleCart} />
            <p className="cardWidget-cant">0</p>
            <Cart show={showCart} hide={handleCart} />
        </div>
    )
}
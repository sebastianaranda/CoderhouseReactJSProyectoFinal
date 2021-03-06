import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from "../Cart/Cart";
import CartContext from "../context/CartContext";

const CardWidget = () => {

    const [showCart, setShowCart] = useState(false)
    const { totalItems } = useContext(CartContext)

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false)
    }

    return (
        <div className="cardWidget">
            <FontAwesomeIcon className='icon' icon={faShoppingCart} onClick={handleCart} />
            {totalItems !== 0 ? (
                <p className="cardWidget-cant">{totalItems}</p>
            ) : (<p className="cardWidget-cant" style={{ display: 'none' }}>{totalItems}</p>)

            }
            <Cart show={showCart} hide={handleCart} />
        </div>
    )
}

export default CardWidget;
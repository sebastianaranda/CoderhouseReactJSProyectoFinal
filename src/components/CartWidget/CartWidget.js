import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CardWidget = () => {
    return (
        <div className="cardWidget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className="cardWidget-cant">0</p>
        </div>
    )
}
export default CardWidget;
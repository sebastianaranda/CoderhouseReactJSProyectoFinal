import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ItemCount = (props) => {

    return (
        <div className="itemCount">
            <div className="itemCount__controls">
                <FontAwesomeIcon icon={faMinus} onClick={props.onRemove} />
                <p>{props.quantity}</p>
                <FontAwesomeIcon icon={faPlus} onClick={props.onAdd} />
            </div>
            <button onClick={props.onBuy} style={props.styleCart}>Agregar al carrito</button>
            <Link to='/cart'>
                <button style={props.styleCheckout}>Ir al Checkout</button>
            </Link>
        </div>
    )
}

export default ItemCount;
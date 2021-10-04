import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function ItemCount(props) {

    return (
        <div className="itemCount">
            <div className="itemCount__controls">
                <FontAwesomeIcon icon={faMinus} onClick={props.onRemove} />
                <p>{props.quantity}</p>
                <FontAwesomeIcon icon={faPlus} onClick={props.onAdd} />
            </div>
            <Link to='/cart'><button>Agregar al carrito</button></Link>
        </div>
    )
}
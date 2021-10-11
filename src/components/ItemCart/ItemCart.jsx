import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const ItemCart = (props) => {

    const { id, image, title, totalPrice, cant } = props;

    return (
        <div className="itemCart" key={id}>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{totalPrice}</p>
            <p>{cant}</p>
            <FontAwesomeIcon icon={faTrashAlt} className='delete' />
        </div>
    )
}

export default ItemCart;
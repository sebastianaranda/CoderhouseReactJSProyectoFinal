import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import CartContext from "../context/CartContext";

const ItemCart = (props) => {

    const { deleteProduct } = useContext(CartContext);
    const { id, image, title, totalPrice, cant } = props;

    const trashButton = () => {
        deleteProduct(id)
    }

    return (
        <div className="itemCart" key={id}>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{totalPrice}</p>
            <p>{cant}</p>
            <FontAwesomeIcon icon={faTrashAlt} className='delete' onClick={trashButton} />
        </div>
    )
}

export default ItemCart;
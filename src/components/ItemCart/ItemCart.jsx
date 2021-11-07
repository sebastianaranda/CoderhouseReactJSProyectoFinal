import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import CartContext from "../context/CartContext";

const ItemCart = ({ item, count }) => {

    const { removeOneItem } = useContext(CartContext);
    const { id, image, title, price, } = item;

    const handleRemoveOneItem = () => {
        removeOneItem(item)
    }

    return (
        <div className="itemCart" key={id}>
            <img src={`/assets/productos/${image}`} alt="" />
            <div className='titleAndCount'>
                <p>{title}</p>
                <p>x {count}</p>
            </div>
            <p className='price'>${price} </p>
            <FontAwesomeIcon icon={faTrashAlt} className='delete' onClick={handleRemoveOneItem} />
        </div>
    )
}

export default ItemCart;
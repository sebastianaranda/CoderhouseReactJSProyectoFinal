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
            {/* ToDo: Reemplazar estas lineas para mostrar las imagenes desde Firebase */}
            {/* <img src={`/assets/productos/${image}`} alt="" /> */}
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{count}</p>
            <p>x ${price}</p>
            <FontAwesomeIcon icon={faTrashAlt} className='delete' onClick={handleRemoveOneItem} />
        </div>
    )
}

export default ItemCart;
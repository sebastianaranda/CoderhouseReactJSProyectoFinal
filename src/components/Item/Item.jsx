import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Item = (item) => {

    const { id, image, title, price } = item;
    const { addItem } = useContext(CartContext)

    const handleOnAdd = () => {
        addItem(item, 1)
    }

    return (
        <div className='container'>
            <div className="producto">
                <Link to={`/item/${id}`}>
                    <div className="imagen-container">
                        <img src={`/assets/productos/${image}`} alt="" className="producto__imagen" />
                    </div>
                    <h3 className="producto__titulo">{title}</h3>
                    <p className="producto__precio">$ {price} USD</p>

                </Link>
                <button className="btnComprar" onClick={handleOnAdd}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Item;
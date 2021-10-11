import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

//contexto
import CartContext from '../context/CartContext';

const Item = (props) => {

    const { products, addProduct } = useContext(CartContext)

    const addToCart = () => {
        //ToDo Borrar este console log
        console.log(products)

        const itemComprado = {
            id: props.id,
            image: props.image,
            title: props.title,
            price: props.price,
            description: props.description,
            cant: 1,
            totalPrice: props.price * 1
        }
        addProduct(itemComprado)
    }

    const { id, image, title, price, description } = props;

    return (
        <div className='container'>
            <div className="producto">
                <Link to={`/item/${id}`}>
                    <div className="imagen-container">
                        <img src={image} alt="" className="producto__imagen" />
                    </div>
                    <h3 className="producto__titulo">{title}</h3>
                    <p className="producto__precio">$ {price} USD</p>

                </Link>
                <button className="btnComprar" onClick={addToCart}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Item;
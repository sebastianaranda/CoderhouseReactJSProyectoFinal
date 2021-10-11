import React, { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartContext from "../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";

export default function Cart({ show, hide }) {

    const { productsEnCarrito, emptyCart } = useContext(CartContext);

    //ToDo borrar este consolelog
    console.log('Productos desde Cartwidget', productsEnCarrito)

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className='closeIcon'>
                <FontAwesomeIcon icon={faTimes} onClick={hide} />
            </div>
            <p className='title'>Tu carrito</p>
            <div className='cartListContainer'>
                {productsEnCarrito.length !== 0 ? (
                    productsEnCarrito.map((item) => {
                        return <ItemCart key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} cant={item.cant} totalPrice={item.totalPrice} description={item.description} />
                    })
                ) : (<div>Usted no tiene productos en el carrito.</div>)}
            </div>
            <p className='clearCart' onClick={emptyCart}>Vaciar carrito</p>
        </div>
    )
}
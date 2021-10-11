import React, { useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartContext from "../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";

export default function Cart({ show, hide }) {

    const { products } = useContext(CartContext);

    //ToDo borrar este consolelog
    console.log('Productos desde Cartwidget', products)

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className='closeIcon'>
                <FontAwesomeIcon icon={faTimes} onClick={hide} />
            </div>
            <p className='title'>Tu carrito</p>
            <div className='cartListContainer'>
                {products.length !== 0 ? (
                    products.map((item) => {
                        return <ItemCart key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} description={item.description} />
                    })
                ) : (<div>Usted no tiene productos en el carrito.</div>)}
            </div>
        </div>
    )
}
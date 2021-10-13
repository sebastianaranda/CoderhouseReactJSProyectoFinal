import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartContext from "../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";

export default function Cart({ show, hide }) {

    const { cartItems, clear } = useContext(CartContext)

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className='closeIcon'>
                <FontAwesomeIcon icon={faTimes} onClick={hide} />
            </div>
            <p className='title'>Tu carrito</p>
            <div className='cartListContainer'>
                {cartItems.length !== 0 ? (
                    cartItems.map(element => {
                        return <ItemCart key={element.item.id} {...element} />
                    })
                ) : (<div>Usted no tiene productos en el carrito.</div>)}
            </div>
            <p className='clearCart' onClick={clear}>Vaciar carrito</p>
            <p className='clearCart'>Generar orden</p>
        </div>
    )
}
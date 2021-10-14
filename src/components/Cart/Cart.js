import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CartContext from "../context/CartContext"
import ItemCart from "../ItemCart/ItemCart";
//Firebase
import db from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import { async } from "@firebase/util";

export default function Cart({ show, hide }) {

    const { cartItems, clear, totalPrice } = useContext(CartContext)

    const newOrder = {
        buyer: {
            name: 'Sebastian',
            email: 'sebastian.aranda.12@gmail.com',
            phone: 1154558031
        },
        items: cartItems,
        total: totalPrice
    }

    const handlerGenerateOrder = () => {
        console.log('Orden generada: ', newOrder)
        pushOrderFirebsae(newOrder)
    }

    const pushOrderFirebsae = async (newOrder) => {
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, newOrder);
        console.log('Se genero la orden con el id: ', order.id)
    }

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className='closeIcon'>
                <FontAwesomeIcon icon={faTimes} onClick={hide} />
            </div>
            <p className='title'>Tu carrito</p>
            <div className='cartListContainer'>
                {cartItems.length !== 0 ? (
                    cartItems.map(e => {
                        return <ItemCart key={e.item.id} {...e} />
                    })
                ) : (<div>Usted no tiene productos en el carrito.</div>)}
            </div>
            <p className='clearCart' onClick={clear}>Vaciar carrito</p>
            <p className='clearCart' onClick={handlerGenerateOrder} >Generar orden</p>
        </div>
    )
}
import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
//Context
import CartContext from "../context/CartContext"

const Cart = ({ show, hide }) => {

    const { cartItems, clear, totalPrice } = useContext(CartContext)

    return (
        <div className={`cartContainer ${show ? 'active' : ''}`}>
            <div className='mainContainer'>
                <div className='header'>
                    <div className='closeIcon'>
                        <FontAwesomeIcon icon={faTimes} onClick={hide} />
                    </div>
                    <p className='title'>Tu carrito</p>
                </div>
                <div className='cartListContainer'>
                    {cartItems.length !== 0 ? (
                        cartItems.map(e => {
                            return <ItemCart key={e.item.id} {...e} />
                        })
                    ) : (<div>Usted no tiene productos en el carrito.</div>)}
                </div>
                <div className='footer' >
                    <div className='price-container'>
                        <p>Total de su compra:</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <div className='buttons-container'>
                        <button className='clearCart' onClick={clear} >Vaciar</button>
                        <Link to='/cart'>
                            <button className='generateOrder' onClick={hide}>Ir a Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
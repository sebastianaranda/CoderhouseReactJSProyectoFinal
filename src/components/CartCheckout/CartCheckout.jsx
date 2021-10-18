import React, { useContext } from "react";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
//context
import CartContext from "../context/CartContext";
//Firebase
import db from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import { async } from "@firebase/util";

const CartCheckout = () => {

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
        <div className='cartCheckout__container'>
            {
                cartItems.length !== 0 ? (
                    <>
                        <div className='cartCheckout__items'>
                            <h2 className='title'>Tu carrito</h2>
                            {cartItems.map(e => {
                                return <ItemCart key={e.item.id} {...e} />
                            })
                            }
                            <button className='btn-clear' onClick={clear}>Vaciar carrito</button>
                        </div>
                        <div className='cartCheckout__form'>
                            <h2>Tus datos personales</h2>
                            <input className='input-style' type="text" name="firstNameUser" id="firstNameUser" placeholder='Nombre' />
                            <input className='input-style' type="text" name="lastNameUser" id="lastNameUser" placeholder='Apellido' />
                            <input className='input-style' type="email" name="emailUser" id="emailUser" placeholder='Email' />
                            <input className='input-style' type="tel" name="phoneUser" id="phoneUser" placeholder='Teléfono' />
                            <h2>Datos de envío</h2>
                            <input className='input-style' type="text" name="addressUser" id="addressUser" placeholder='Dirección' />
                            <div className='col-2' >
                                <input className='input-style' type="text" name="cityUser" id="cityUser" placeholder='Ciudad' />
                                <input className='input-style' type="number" name="postalCodeUser" id="postalCodeUser" placeholder='CP' />
                            </div>
                            <input className='input-style' type="text" name="stateUser" id="stateUser" placeholder='Provincia' />
                            <button className='btn-orderGenerate' onClick={handlerGenerateOrder}>Generar orden</button>
                        </div>
                    </>
                ) : (
                    <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
                        <h3>Usted no tiene productos en su carrito</h3>
                        <Link to='/'>
                            <button className='btn-goToShop'>Ir a comprar</button>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default CartCheckout;
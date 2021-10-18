import React, { useContext } from "react";
import ItemCart from "../ItemCart/ItemCart";
//context
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartCheckout = () => {

    const { cartItems, clear, totalPrice } = useContext(CartContext)

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
                            <button className='btn-orderGenerate'>Generar orden</button>
                        </div>
                    </>
                ) : (
                    <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
                        <h3>Usted no tiene productos en su carrito</h3>
                        <Link to='/'>
                            <button className='btn-goToShop' >Ir a comprar</button>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default CartCheckout;
import React, { useContext, useEffect } from "react";
import ItemCart from "../ItemCart/ItemCart";
import { Link, useHistory } from "react-router-dom";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
//context
import CartContext from "../context/CartContext";
//Firebase
import db from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";

const CartCheckout = () => {

    const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(validateInfo);
    //const { isSubmitting } = useForm();

    const { cartItems, clear, totalPrice } = useContext(CartContext)
    const history = useHistory();

    let orderID;

    const newOrder = {
        buyer: {
            name: 'Sebastian',
            email: 'sebastian.aranda.12@gmail.com',
            phone: 1154558031
        },
        items: cartItems,
        total: totalPrice
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            console.log('ACEPTADO')
        } else {
            console.log('NONONONONO')
        }
    }, [errors])

    const handlerGenerateOrder = () => {
        console.log('Orden generada: ', newOrder)
        pushOrderFirebsae(newOrder)
    }

    const pushOrderFirebsae = async (newOrder) => {
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, newOrder);
        console.log('Se genero la orden con el id: ', order.id)
        orderID = order.id;
        let path = `/order/${orderID}`;
        routeChange(path)
    }

    const routeChange = (path) => {
        history.push(path);
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
                            <Link to='/'>
                                <button className='btn-clear' onClick={clear}>Vaciar carrito</button>
                            </Link>
                        </div>
                        <form className='cartCheckout__form' onSubmit={handleSubmit}>
                            <h2>Tus datos personales</h2>
                            <input
                                id='firstNameUser'
                                type='text'
                                name='firstNameUser'
                                className='input-style'
                                placeholder='Nombre'
                                value={values.firstNameUser}
                                onChange={handleChange}
                            />
                            {errors.firstNameUser && <label>{errors.firstNameUser}</label>}
                            <input
                                id='lastNameUser'
                                type='text'
                                name='lastNameUser'
                                className='input-style'
                                placeholder='Apellido'
                                value={values.lastNameUser}
                                onChange={handleChange}
                            />
                            {errors.lastNameUser && <label>{errors.lastNameUser}</label>}
                            <input
                                id='emailUser'
                                type='email'
                                name='emailUser'
                                className='input-style'
                                placeholder='Email'
                                value={values.emailUser}
                                onChange={handleChange}
                            />
                            {errors.emailUser && <label>{errors.emailUser}</label>}
                            <input
                                id='phoneUser'
                                type='tel'
                                name='phoneUser'
                                className='input-style'
                                placeholder='Teléfono'
                                value={values.phoneUser}
                                onChange={handleChange}
                            />
                            {errors.phoneUser && <label>{errors.phoneUser}</label>}
                            <h2>Datos de envío</h2>
                            <input
                                id='addressUser'
                                type='text'
                                name='addressUser'
                                className='input-style'
                                placeholder='Dirección'
                                value={values.addressUser}
                                onChange={handleChange}
                            />
                            {errors.addressUser && <label>{errors.addressUser}</label>}
                            <div className='col-2' >
                                <input
                                    id='cityUser'
                                    type='text'
                                    name='cityUser'
                                    className='input-style'
                                    placeholder='Ciudad'
                                    value={values.cityUser}
                                    onChange={handleChange}
                                />
                                {errors.cityUser && <label>{errors.cityUser}</label>}
                                <input
                                    id='postalCodeUser'
                                    type='text'
                                    name='postalCodeUser'
                                    className='input-style'
                                    placeholder='CP'
                                    value={values.postalCodeUser}
                                    onChange={handleChange}
                                />
                                {errors.postalCodeUser && <label>{errors.postalCodeUser}</label>}
                            </div>
                            <input
                                className='input-style'
                                type='text'
                                name='stateUser'
                                id='stateUser'
                                placeholder='Provincia'
                                value={values.stateUser}
                                onChange={handleChange}
                            />
                            {errors.stateUser && <label>{errors.stateUser}</label>}
                            {/* <button className='btn-orderGenerate' onClick={handlerGenerateOrder}>Generar orden</button> */}
                            <button className='btn-orderGenerate' type='submit'>Generar orden</button>
                        </form>
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
        </div>
    )
}

export default CartCheckout;
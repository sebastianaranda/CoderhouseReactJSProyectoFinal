import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    //Custom Provider
    const [products, setProducts] = useState([])

    const addProduct = (product) => {





        setProducts([...products, product])

        //ToDo Borrar este console log
        console.log("Productos agregados al carrito", products)
    }

    const deleteProduct = (product) => {
        //!ACA PONER LA FUNCION PARA BORRAR EL ITEM DEL CARRITO
    }

    const data = {
        products,
        addProduct,
        deleteProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    //Custom Provider
    const [productsEnCarrito, setProducts] = useState([])

    const addProduct = (product) => {
        //ToDo Borrar este console log
        console.log('Este es el producto', product)
        const isInCart = productsEnCarrito.some(producto => producto.id === product.id);
        //ToDo Borrar este console log
        console.log(isInCart)
        if (isInCart) {
            const productos = productsEnCarrito.map(producto => {
                if (producto.id == product.id) {
                    producto.cant = producto.cant + product.cant;
                    producto.price = product.price;
                    producto.totalPrice = producto.totalPrice + product.totalPrice;
                }
                return producto;
            });
            setProducts([...productos]);
        } else {
            setProducts([...productsEnCarrito, product])
        }
        //ToDo Borrar este console log
        console.log("Productos agregados al carrito", productsEnCarrito)
    }

    const deleteProduct = (id) => {
        //!ESTO NO ESTA ANDANDO BIEN
        for (let i = 0; i < productsEnCarrito.length; i++) {
            if (productsEnCarrito[i].id == id) {
                if (productsEnCarrito[i].cant > 1) {
                    productsEnCarrito[i].cant = productsEnCarrito[i].cant - 1;
                    productsEnCarrito[i].totalPrice = productsEnCarrito[i].totalPrice - productsEnCarrito[i].price;
                } else {
                    setProducts(productsEnCarrito.splice(i, 1))
                }
            }
        }
        setProducts(productsEnCarrito)
    }

    const emptyCart = () => {
        console.log('borraste carrito')
        setProducts([])
    }

    const data = {
        productsEnCarrito,
        addProduct,
        deleteProduct,
        emptyCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;
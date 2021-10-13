import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    //Custom Provider
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setTotal(handleTotal())
        setPrice(handleTotalPrice())
    }, [cartItems])

    const addItem = (item, count) => {
        let cartElement = { item, count }
        let cartAux = []
        if (isInCart(item)) {
            cartElement = cartItems.find(element => element.item.id === item.id)
            cartElement.count = cartElement.count + count
            cartAux = [...cartItems]
        } else {
            cartAux = [cartElement, ...cartItems]
        }
        setCartItems(cartAux)
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
            setCartItems([...cartElements])
        }
    }

    const clear = () => {
        return setCartItems([])
    }

    const isInCart = (item) => {
        return cartItems && cartItems.some(element => element.item.id === item.id)
    }

    const removeOneItem = item => {
        if (isInCart(item)) {
            let cartElement = cartItems.find(element => element.item.id === item.id)
            if (cartElement.count === 1) {
                removeItem(item)
            } else {
                let cart = cartItems
                cart.map(element => {
                    if (element.item.id === item.id) {
                        element.count = element.count - 1
                    }
                    return element
                })
                setCartItems([...cart])
            }
        }
    }

    const handleTotalPriceByItem = () => {
        let newCartItems = cartItems
        const totalPriceCart = newCartItems.map(element => {
            return {
                ...element,
                price: element.item.price * element.count
            }
        })
        return totalPriceCart
    }

    const handleTotal = () => {
        const initialValue = 0
        return (
            cartItems && cartItems.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count
            }, initialValue)
        )
    }

    const handleTotalPrice = () => {
        const cartAux = handleTotalPriceByItem()
        const initialValue = 0
        return (cartAux && cartAux.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
        }, initialValue)
        )
    }

    const data = {
        addItem,
        removeItem,
        clear,
        isInCart,
        removeOneItem,
        cartItems,
        total,
        price,
        handleTotalPriceByItem
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;
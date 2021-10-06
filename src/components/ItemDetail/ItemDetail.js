import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetails(props) {

    const cart = [];

    const { id, image, title, price, description, itemStock } = props;

    const [item, setItem] = useState(0);
    const [stock, setStock] = useState(itemStock);
    const [styleCart, setStyleCart] = useState({
        'display': 'block'
    })
    const [styleCheckout, setStyleCheckout] = useState({
        'display': 'none'
    })

    const onAdd = () => {
        item < stock && setItem(item + 1);
    }

    const onRemove = () => {
        item > 0 && setItem(item - 1);
    }

    const onBuy = () => {
        cart.push({
            id: id,
            image: image,
            title: title,
            price: price,
            cant: item
        })
        setStock(stock - item)
        setItem(0)
        console.log('El carrito es', cart)
        setStyleCart({
            'display': 'none'
        })
        setStyleCheckout({
            'display': 'block'
        })
    }

    return (
        <div className="item">
            <img className="item__image" src={image} alt="" />
            <div className="item__content">
                <h2 className="item__title">{title}</h2>
                <p className="item__price">${price} USD</p>
                <p className="item__description">{description}</p>
                <ItemCount onAdd={onAdd} onRemove={onRemove} quantity={item} onBuy={onBuy} styleCart={styleCart} styleCheckout={styleCheckout} />
            </div>
        </div>
    );
}

export default ItemDetails;
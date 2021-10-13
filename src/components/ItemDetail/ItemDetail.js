import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
//context
import CartContext from '../context/CartContext';
import { useContext } from 'react';

function ItemDetails(details) {
    const { id, image, title, price, description, itemStock } = details;

    const { addItem } = useContext(CartContext)
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
        if (item > 0) {
            const itemComprado = {
                id: id,
                image: image,
                title: title,
                price: price,
                description: description
            }
            addItem(itemComprado, item)
            setStock(stock - item)
            setItem(0)
            setStyleCart({
                'display': 'none'
            })
            setStyleCheckout({
                'display': 'block'
            })
        }
    }

    return (
        <div className="item">
            <img className="item__image" src={`/assets/productos/${image}`} alt="" />
            <div className="item__content">
                <h2 className="item__title">{title}</h2>
                <p className="item__price">$ {price} USD</p>
                <p className="item__description">{description}</p>
                <ItemCount onAdd={onAdd} onRemove={onRemove} quantity={item}
                    onBuy={onBuy} styleCart={styleCart} styleCheckout={styleCheckout} />
            </div>
        </div>
    );
}

export default ItemDetails;
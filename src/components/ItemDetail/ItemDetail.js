import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetails(props) {

    const { id, image, title, price, description, itemStock } = props;

    const [item, setItem] = useState(0);
    const [stock, setStock] = useState(itemStock);

    const onAdd = () => {
        item < stock && setItem(item + 1);
    }

    const onRemove = () => {
        item > 0 && setItem(item - 1);
    }

    return (
        <div className="item">
            <img className="item__image" src={image} alt="" />
            <div className="item__content">
                <h2 className="item__title">{title}</h2>
                <p className="item__price">${price} USD</p>
                <p className="item__description">{description}</p>
                <ItemCount onAdd={onAdd} onRemove={onRemove} quantity={item} />
            </div>
        </div>
    );
}

export default ItemDetails;
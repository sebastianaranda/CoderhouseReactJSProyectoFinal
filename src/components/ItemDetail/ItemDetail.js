import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetails(props) {

    const { id, image, title, price, description } = props;

    return (
        <div className="item">
            <img className="item__image" src={image} alt="" />
            <div className="item__content">
                <h2 className="item__title">{title}</h2>
                <p className="item__price">${price} USD</p>
                <p className="item__description">{description}</p>
                <ItemCount />
            </div>
        </div>
    );
}

export default ItemDetails;
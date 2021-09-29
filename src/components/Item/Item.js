import React from 'react'

const Item = (props) => {

    const { id, image, title, price, description } = props;

    return (
        <div className="producto">
            <div className="imagen-container">
                <img src={image} alt="" className="producto__imagen" />
            </div>
            <h3 className="producto__titulo">{title}</h3>
            <p className="producto__precio">${price} USD</p>
            <button className="btnComprar">Comprar</button>
        </div>
    )
}

export default Item;
import React from 'react'

const Product = (props) => {

    const { price, title, image } = props;

    return (
        <div className="producto">
            <div className="imagen-container">
                <img src={image} alt="" className="imagen" />
            </div>
            <h3 className="titulo">{title}</h3>
            <p className="precio">{price}</p>
            <button className="btnComprar">Comprar</button>
        </div>
    )
}

export default Product;
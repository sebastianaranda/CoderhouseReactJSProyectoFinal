import React from 'react'
import productImg from '../../assets/productos/watch/watch_s3.jpg'

const Product = (props) => {

    const { price, title } = props;

    return (
        <div className="producto">
            <div className="imagen-container">
                <img src={productImg} alt="" className="imagen" />
            </div>
            <h3 className="titulo">{title}</h3>
            <p className="precio">{price}</p>
            <button className="btnComprar">Comprar</button>
        </div>
    )
}

export default Product;
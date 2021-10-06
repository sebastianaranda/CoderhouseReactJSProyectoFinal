import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {

    const { id, image, title, price, description } = props;

    return (
        <div className='container'>
            <div className="producto">
                <Link to={`/item/${id}`}>
                    <div className="imagen-container">
                        <img src={image} alt="" className="producto__imagen" />
                    </div>
                    <h3 className="producto__titulo">{title}</h3>
                    <p className="producto__precio">${price} USD</p>
                    <button className="btnComprar">Comprar</button>
                </Link>
            </div>
        </div>

    )
}

export default Item;
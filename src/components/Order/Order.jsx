import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Order = () => {
    const { orderID } = useParams();
    return (
        <div className='order-container'>
            <h2>¡Muchas gracias por su compra!</h2>
            <h4>Su orden se generó correctamente con el siguiente número:<br /> {orderID}</h4>
            <Link to='/'>
                <button>Volver a la tienda</button>
            </Link>
        </div>
    )
}

export default Order;
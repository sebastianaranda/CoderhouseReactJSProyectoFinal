import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = () => {

    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1);

    useEffect(() => {
        console.log('Stock restante: ' + stock);
        if (stock > 0) {
            setInitial(1);
        } else {
            setInitial(0);
        }
    }, [stock]);

    const agregarItem = () => {
        if (initial < stock) {
            setInitial(initial + 1);
        }
    };
    const eliminarItem = () => {
        if (initial > 0) {
            setInitial(initial - 1);
        }
    };
    const agregarStock = () => {
        if (initial > 0) {
            setStock(stock - initial);
        }
    };

    return (
        <div className="itemCount">
            <div className="itemCount__controls">
                <FontAwesomeIcon icon={faMinus} onClick={eliminarItem} />
                <p>{initial}</p>
                <FontAwesomeIcon icon={faPlus} onClick={agregarItem} />
            </div>
            <button onClick={agregarStock}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;
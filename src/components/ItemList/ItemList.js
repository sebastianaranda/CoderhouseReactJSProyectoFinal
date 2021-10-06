import React, { useContext } from 'react'
import Item from '../Item/Item';
//context
import CartContext from '../context/CartContext';

const ItemList = (props) => {

    const { contextData } = useContext(CartContext);

    const { itemArray } = props;

    return (
        <div className="listContainer">
            {itemArray.length !== 0 ? (
                itemArray.map((item) => {
                    return <Item key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} description={item.description} />
                })
            ) : (<div>Cargando...</div>)}
        </div>
    )
}

export default ItemList;
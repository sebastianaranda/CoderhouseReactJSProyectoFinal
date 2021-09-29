import React from 'react'
import Item from '../Item/Item';

const ItemList = (props) => {

    const { itemArray } = props;

    return (
        <div className="listContainer">
            {itemArray.length !== 0 ? (
                itemArray.map((item) => {
                    return <Item key={item.id} image={item.image} title={item.title} price={item.price} description={item.description} />
                })
            ) : (<div>Cargando...</div>)}
        </div>
    )
}

export default ItemList;
import React from 'react'
import Item from '../Item/Item';

const ItemList = (props) => {

    const { itemArray } = props;

    return (
        <div className="listContainer">
            {itemArray.length !== 0 ? (
                itemArray.map((item) => {
                    return <Item key={item.id} title={item.title} price={item.price} image={item.img} />
                })
            ) : (<div>Cargando...</div>)}
        </div>
    )
}

export default ItemList;
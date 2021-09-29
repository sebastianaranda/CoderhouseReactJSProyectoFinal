import React, { useEffect, useState } from 'react'
import ItemDetails from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [itemData, setItemData] = useState([])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItem =
            {
                id: '1',
                image: '/assets/productos/watch/watch_hermes.jpg',
                title: 'Apple Watch Hermès',
                price: '1229',
                description: 'Un equilibrio sublime entre tradición e innovación: la potencia del Apple Watch Series 7 con la exclusiva colección Hermès de esferas y correas.'
            }
            resolve(mockItem)
        }, 2000)
    })

    useEffect(() => {
        getItem.then((response) => {
            setItemData(response)
        })
    }, [])

    return (
        <ItemDetails key={itemData.id} image={itemData.image} title={itemData.title} price={itemData.price} description={itemData.description} />
    );
}

export default ItemDetailContainer;
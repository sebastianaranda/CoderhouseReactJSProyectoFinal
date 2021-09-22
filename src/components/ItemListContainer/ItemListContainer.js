import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = [
                {
                    id: '1',
                    title: "Remera 1",
                    img: './assets/productos/watch/watch_hermes.jpg',
                    price: '500',
                    description: 'Hu lala'
                },
                {
                    id: '2',
                    title: "Remera 2",
                    img: './assets/productos/watch/watch_nike.jpg',
                    price: '12000',
                    description: 'Hu lala'
                },
                {
                    id: '3',
                    title: "Remera 3",
                    img: './assets/productos/watch/watch_s3.jpg',
                    price: '1900',
                    description: 'Hu lala'
                },
                {
                    id: '4',
                    title: "Remera 4",
                    img: './assets/productos/watch/watch_s6.jpg',
                    price: '1900',
                    description: 'Hu lala'
                },
                {
                    id: '5',
                    title: "Remera 6",
                    img: './assets/productos/watch/watch_se.jpg',
                    price: '1900',
                    description: 'Hu lala'
                }
            ]
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() => {
        getItems.then((res) => {
            console.log(res)
            setItems(res)
        })
    }, [])

    return (
        <div>
            <ItemList itemArray={items} />
        </div>
    )
}
export default ItemListContainer;
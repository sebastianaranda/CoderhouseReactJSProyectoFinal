import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Product from "../Product/Product";

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
                    img: './assets/productos/watch/watch_s3.jpg',
                    price: '12000',
                    description: 'Hu lala'
                },
                {
                    id: '3',
                    title: "Remera 3",
                    img: './assets/productos/watch/watch_s6.jpg',
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
        <div className="listContainer">
            {items.length !== 0 ? (
                items.map((item) => {
                    return <Product key={item.id} title={item.title} price={item.price} image={item.img} />
                })
            ) : (<div>Cargando...</div>)}

        </div>
    )
}
export default ItemListContainer;
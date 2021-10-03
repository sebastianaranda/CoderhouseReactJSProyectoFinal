import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [itemsData, setItemsData] = useState([])

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = [
                {
                    id: '1',
                    image: '/assets/productos/watch/watch_hermes.jpg',
                    title: 'Apple Watch Hermès',
                    price: '1229',
                    description: 'Un equilibrio sublime entre tradición e innovación: la potencia del Apple Watch Series 7 con la exclusiva colección Hermès de esferas y correas.',
                    stock: 5
                },
                {
                    id: '2',
                    image: '/assets/productos/watch/watch_nike.jpg',
                    title: 'Apple Watch Nike',
                    price: '399',
                    description: 'l Apple Watch Nike y la app Nike Run Club son el equipo ideal para salir a correr. La nueva carátula Nike se mueve contigo. Ahora puedes ver las rachas y la tabla de ritmo directamente en la app Nike Run Club. Y esto es sólo el comienzo. Da el siguiente paso hacia una mejor forma de correr con el Apple Watch Nike.',
                    stock: 5
                },
                {
                    id: '3',
                    image: '/assets/productos/watch/watch_s3.jpg',
                    title: 'Apple Watch Series 3',
                    price: '199',
                    description: 'Te enamora a la cuenta de 3.',
                    stock: 5
                },
                {
                    id: '4',
                    image: '/assets/productos/watch/watch_s6.jpg',
                    title: 'Apple Watch Series 6',
                    price: '399',
                    description: 'El Apple Watch Series 6 se adelanta a su tiempo con una app y un sensor revolucio­narios capaces de medir tu oxígeno en sangre. Hazte un electro en cualquier momento y ten a mano tus datos de actividad gracias a la pantalla Retina siempre activa. Este reloj te ayudará a llevar una vida sana, activa y conectada con todo lo que te importa.',
                    stock: 5
                },
                {
                    id: '5',
                    image: '/assets/productos/watch/watch_se.jpg',
                    title: 'Apple Watch SE',
                    price: '279',
                    description: 'El Apple Watch SE viene con una amplia pantalla Retina, sensores para registrar tus entrenamientos e increíbles funcionalidades de salud y seguridad.',
                    stock: 5
                }
            ]
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() => {
        getItems.then((response) => {
            setItemsData(response)
        })
    }, [])

    return (
        <div>
            <ItemList itemArray={itemsData} />
        </div>
    )
}

export default ItemListContainer;
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import ItemDetails from '../ItemDetail/ItemDetail';
//BORRAR
//firebase
import db from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

function ItemDetailContainer() {

    const { id } = useParams();
    const [itemData, setItemData] = useState([])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItem = [
                {
                    id: 1,
                    image: '/assets/productos/watch/watch_hermes.jpg',
                    title: 'Apple Watch Hermès',
                    price: 1229,
                    description: 'Un equilibrio sublime entre tradición e innovación: la potencia del Apple Watch Series 7 con la exclusiva colección Hermès de esferas y correas.',
                    stock: 5,
                    category: 'watch'
                },
                {
                    id: 2,
                    image: '/assets/productos/watch/watch_nike.jpg',
                    title: 'Apple Watch Nike',
                    price: 399,
                    description: 'l Apple Watch Nike y la app Nike Run Club son el equipo ideal para salir a correr. La nueva carátula Nike se mueve contigo. Ahora puedes ver las rachas y la tabla de ritmo directamente en la app Nike Run Club. Y esto es sólo el comienzo. Da el siguiente paso hacia una mejor forma de correr con el Apple Watch Nike.',
                    stock: 5,
                    category: 'watch'
                },
                {
                    id: 3,
                    image: '/assets/productos/watch/watch_s3.jpg',
                    title: 'Apple Watch Series 3',
                    price: 199,
                    description: 'Te enamora a la cuenta de 3.',
                    stock: 5,
                    category: 'watch'
                },
                {
                    id: 4,
                    image: '/assets/productos/watch/watch_s6.jpg',
                    title: 'Apple Watch Series 6',
                    price: 399,
                    description: 'El Apple Watch Series 6 se adelanta a su tiempo con una app y un sensor revolucio­narios capaces de medir tu oxígeno en sangre. Hazte un electro en cualquier momento y ten a mano tus datos de actividad gracias a la pantalla Retina siempre activa. Este reloj te ayudará a llevar una vida sana, activa y conectada con todo lo que te importa.',
                    stock: 5,
                    category: 'watch'
                },
                {
                    id: 5,
                    image: '/assets/productos/watch/watch_se.jpg',
                    title: 'Apple Watch SE',
                    price: 279,
                    description: 'El Apple Watch SE viene con una amplia pantalla Retina, sensores para registrar tus entrenamientos e increíbles funcionalidades de salud y seguridad.',
                    stock: 5,
                    category: 'watch'
                },
                {
                    id: 6,
                    image: '/assets/productos/mac/mbp16.png',
                    title: 'MacBook Pro 16"',
                    price: 2399,
                    description: 'The best for the brightest. Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook we have ever made. With an immersive Retina display, superfast processors, advanced graphics, the largest battery capacity ever in a MacBook Pro, Magic Keyboard, and massive storage, its the ultimate pro notebook for the ultimate user.',
                    stock: 5,
                    category: 'mac'
                },
                {
                    id: 7,
                    image: '/assets/productos/mac/mbp13.png',
                    title: 'MacBook Pro 13"',
                    price: 1299,
                    description: 'All systems Pro. The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life — the longest of any Mac ever. It’s our most popular pro notebook, taken to a whole new level.',
                    stock: 5,
                    category: 'mac'
                },
                {
                    id: 8,
                    image: '/assets/productos/mac/mba.png',
                    title: 'MacBook Air',
                    price: 999,
                    description: 'Power. It’s in the Air. Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.',
                    stock: 5,
                    category: 'mac'
                },
                {
                    id: 9,
                    image: '/assets/productos/ipad/ipad_mini.png',
                    title: 'iPad mini',
                    price: 499,
                    description: 'Mega power. Mini sized.',
                    stock: 5,
                    category: 'ipad'
                },
                {
                    id: 10,
                    image: '/assets/productos/ipad/ipad_air.png',
                    title: 'iPad Air',
                    price: 599,
                    description: 'Powerful. Colorful. Wonderful.',
                    stock: 5,
                    category: 'ipad'
                },
                {
                    id: 11,
                    image: '/assets/productos/ipad/ipad_pro.png',
                    title: 'iPad Pro',
                    price: 799,
                    description: 'The ultimate iPad experience.',
                    stock: 5,
                    category: 'ipad'
                },
                {
                    id: 12,
                    image: '/assets/productos/iphone/iphone_13_pro.jpg',
                    title: 'iPhone 13 Pro',
                    price: 999,
                    description: 'The ultimate iPhone.',
                    stock: 5,
                    category: 'iphone'
                },
                {
                    id: 13,
                    image: '/assets/productos/iphone/iphone_13.jpg',
                    title: 'iPhone 13',
                    price: 699,
                    description: 'A total powerhouse.',
                    stock: 5,
                    category: 'iphone'
                },
                {
                    id: 14,
                    image: '/assets/productos/iphone/iphone_12.jpg',
                    title: 'iPhone 12',
                    price: 599,
                    description: 'As amazing as ever.',
                    stock: 5,
                    category: 'iphone'
                },
                {
                    id: 15,
                    image: '/assets/productos/iphone/iphone_se.jpg',
                    title: 'iPhone SE',
                    price: 399,
                    description: 'Lots to love. Less to spend.',
                    stock: 5,
                    category: 'iphone'
                }
            ]
            resolve(mockItem)
        }, 2000)
    })

    useEffect(() => {
        getItem.then((response) => {

            let productFiltered = response.filter(producto => producto.id == id)
            let selectedItem;

            productFiltered.forEach(producto => {
                const { id, image, title, price, description, stock } = producto;
                selectedItem = {
                    id: id,
                    image: image,
                    title: title,
                    price: price,
                    description: description,
                    stock: stock
                }
            });
            setItemData(selectedItem)
        })
    }, [id])

    /* async function getProducts(db) {
        const productsCol = collection(db, 'products');
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        //TEST
        let productFiltered = productList.filter(producto => producto.id == id)
        let selectedItem;
        productFiltered.forEach(producto => {
            const { id, image, title, price, description, stock } = producto;
            selectedItem = {
                id: id,
                image: image,
                title: title,
                price: price,
                description: description,
                stock: stock
            }
        });
        return setItemData(selectedItem);
        //return setItemsData(productList);
    }

    useEffect(() => {
        getProducts(db)
    }, []) */

    return (
        <ItemDetails key={itemData.id} id={itemData.id} image={itemData.image} title={itemData.title} price={itemData.price} description={itemData.description} itemStock={itemData.stock} />
    );
}

export default ItemDetailContainer;
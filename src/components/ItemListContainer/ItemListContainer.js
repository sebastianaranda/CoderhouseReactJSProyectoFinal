import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
//firebase
import db from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

const ItemListContainer = () => {
    //PRUEBA
    const { id } = useParams();
    const [itemsData, setItemsData] = useState([]);

    /* const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = [
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
            resolve(mockItems)
        }, 2000)
    }) */

    /* useEffect(() => {
        getItems.then((response) => {
            let filteredArray;

            if (id == null) {
                filteredArray = response;
            } else {
                filteredArray = response.filter(response => response.category === id)
            }
            setItemsData(filteredArray)
        })
    }, [id]) */

    async function getProducts(db) {
        const productsCol = collection(db, 'products');
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        return setItemsData(productList);
    }

    useEffect(() => {
        getProducts(db)
    }, [])

    return (
        <div>
            <ItemList itemArray={itemsData} />
        </div>
    )
}

export default ItemListContainer;
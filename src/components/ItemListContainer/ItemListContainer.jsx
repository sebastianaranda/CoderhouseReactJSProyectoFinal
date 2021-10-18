import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
//firebase
import db from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

const ItemListContainer = () => {
    //PRUEBA
    const { category } = useParams();
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        getProducts(db)
    }, [category])

    async function getProducts(db) {
        const productsList = [];
        const productsCol = collection(db, 'products')
        const productSnapshot = await getDocs(productsCol)
        const productsSnap = productSnapshot.docs.map(doc => doc.data())
        const idSnap = productSnapshot.docs.map(doc => doc.id)

        for (let i = 0; i < productsSnap.length; i++) {
            productsList.push({ ...productsSnap[i], id: idSnap[i] })
        }
        let filteredArray;
        if (category == null) {
            return setItemsData(productsList)
        } else {
            filteredArray = productsList.filter(productList => productList.category === category)
            return setItemsData(filteredArray)
        }
    }

    return (
        <div>
            <ItemList itemArray={itemsData} />
        </div>
    )
}

export default ItemListContainer;
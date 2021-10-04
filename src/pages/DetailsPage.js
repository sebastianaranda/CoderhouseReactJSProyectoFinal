import React from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function DetailsPage() {
    const { productId } = useParams();

    return (
        <>
            {/* <p>Id de producto: {productId}</p> */}
            <ItemDetailContainer />
        </>
    )
}
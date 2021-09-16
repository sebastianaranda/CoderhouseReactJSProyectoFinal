import React from "react";
import Product from "../Product/Product";

const ItemListContainer = () => {
    return (
        <div className="listContainer">
            <Product title="Reloj 1" price="$1400" />
            <Product title="Reloj 2" price="$1600" />
            <Product title="Reloj 3" price="$5040" />
            <Product title="Reloj 4" price="$1400" />
            <Product title="Reloj 5" price="$1600" />
            <Product title="Reloj 6" price="$5040" />
        </div>
    )
}
export default ItemListContainer;
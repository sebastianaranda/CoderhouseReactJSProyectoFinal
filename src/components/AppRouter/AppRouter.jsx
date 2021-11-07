import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import ContactPage from "../../pages/ContactPage";
import NotFoundPage from "../../pages/NotFoundPage";
import DetailsPage from "../../pages/DetailsPage";
import CategoryPage from "../../pages/CategoryPage";
import CheckoutPage from "../../pages/CheckoutPage";
import NavBar from "../NavBar/NavBar";
//context
import { CartProvider } from "../context/CartContext";
import OrderPage from "../../pages/OrderPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Switch>
                    <Route path="/contacto" component={ContactPage} />
                    <Route path="/item/:id" component={DetailsPage} />
                    <Route path='/category/:category' component={CategoryPage} />
                    <Route path='/cart' component={CheckoutPage} />
                    <Route path='/order/:orderID' component={OrderPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter;
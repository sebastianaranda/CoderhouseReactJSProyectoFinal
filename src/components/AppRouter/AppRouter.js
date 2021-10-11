import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import ContactPage from "../../pages/ContactPage";
import NotFoundPage from "../../pages/NotFoundPage";
import DetailsPage from "../../pages/DetailsPage";
import CategoryPage from "../../pages/CategoryPage";
import NavBar from "../NavBar/NavBar";
//context
import { CartProvider } from "../context/CartContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Switch>
                    <Route path="/contacto" component={ContactPage} />
                    <Route path="/item/:id" component={DetailsPage} />
                    <Route path='/category/:id' component={CategoryPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </CartProvider>
        </BrowserRouter>
    )
}
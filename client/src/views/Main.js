import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import Details from "../views/Details"
import EditProduct from "./EditProduct";

export default () => {


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ProductList />
                    </Route>
                    
                    <Route exact path="/product/:id">
                        <Details />
                    </Route>
                    <Route exact path="/:id/edit">
                        <EditProduct />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

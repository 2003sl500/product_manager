import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Details from "../views/Details"

export default () => {
    // const [message, setMessage] = useState('Loading...')
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/")
                .then((res) => setProduct(res.data))
                .catch((err) => console.log("Error: ", err));
    }, []);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <ProductForm />
                        <ProductList product={product} />
                    </Route>
                    <Route exact path="/product/:id">
                        <Details />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

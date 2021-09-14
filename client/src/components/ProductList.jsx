import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductList = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [id, setId] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);
    const [product, setProduct] = useState([]);
    const [info, setInfo] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
                .post("http://localhost:8000/api/product", {
                    title,
                    price,
                    description,
                })
                .then((res) => {
                    setPrice(0);
                    setTitle("");
                    setDescription("");
                    setBtnClicked(!btnClicked)
                })
                .catch((err) => console.log(err));
                
    };

    useEffect(() => {
        if (info === true) {
            axios
                .get("http://localhost:8000/api/product/")
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => console.log("Error: ", err));
        } else {
            axios
                .delete(`http://localhost:8000/api/product/${id}`)
                .then((res) => {
                    setBtnClicked(!btnClicked);
                    setInfo(true);
                })
                .catch((err) => console.log(err));
        }
    }, [btnClicked]);

    const deleteBtn = (id) => {
        setBtnClicked(!btnClicked);
        setId(id);
        setInfo(!info);
    };

    return (
        <div className="App">
            <form className="App" onSubmit={onSubmitHandler}>
                <h1>Project Manager</h1>
                <p>
                    <label>Title&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </p>
                <p>
                    <label>Price&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </p>
                <p>
                    <label>Description&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </p>
                <input type="submit" value="Create" />
                <p>
                    ______________________________________________________________________________
                </p>
            </form>
            <h1>All Products:</h1>
            {product.map((prod, index) => {
                return (
                    <p key={index}>
                        <Link to={`/product/${prod._id}`}>{prod.title}</Link>
                        &nbsp;|&nbsp;
                        <button onClick={() => deleteBtn(prod._id)}>
                            Delete
                        </button>
                    </p>
                );
            })}
        </div>
    );
};

export default ProductList;

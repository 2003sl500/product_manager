import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {id} = useParams("") 
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                return(
                    setTitle(res.data.title),
                    setPrice(res.data.price),
                    setDescription(res.data.description)
                    )
            })
            .catch(err => console.log("Error: ", err))
    },[])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res.data)
            })
            .catch(err=>console.log(err))
            history.push('/')
    }
    return (
        <form className="App" onSubmit={onSubmitHandler}>
            <h1>Edit Product</h1>
            <p>
                <label>Title&nbsp;&nbsp;</label>
                <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price&nbsp;&nbsp;</label>
                <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description&nbsp;&nbsp;</label>
                <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value="Update"/>
            <p>______________________________________________________________________________</p>
        </form>
    )
}

export default EditProduct
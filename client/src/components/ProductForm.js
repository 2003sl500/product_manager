import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
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
            <input type="submit"/>
        </form>
    )
}


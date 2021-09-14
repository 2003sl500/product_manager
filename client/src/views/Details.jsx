import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const Details = () => {
    const history = useHistory()
    const [details, setDetails] = useState([])

    const {id} = useParams('')

    const findProduct = () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                return(
                    setDetails(res.data)
                    )
            })
            .catch(err => console.log("Error: ", err))
    }

    useEffect(() => {
        findProduct()
    },[])

    const editProduct = () => {
        history.push(`/${id}/edit`)
    }

    const deleteProduct = () => {
        axios
                .delete(`http://localhost:8000/api/product/${id}`)
                .then((res) => {
                    console.log("id being deleted:", id);
                    history.push('/')
                })
                .catch((err) => console.log(err));   
    }

    return (
        <div className="App">
                <div>
                <button onClick={() => history.push('/')}>Home</button>&nbsp;&nbsp;
                <button onClick={editProduct}>Edit</button>&nbsp;&nbsp;
                <button onClick={deleteProduct}>Delete</button>
                <h1>{details.title}</h1>
                <h2>Price: {details.price}</h2>
                <h2>Description: {details.description}</h2>
                </div>
        </div>
    )
}

export default Details
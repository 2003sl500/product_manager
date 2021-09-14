import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Details = (props) => {
    // const [message, setMessage] = useState('Loading...')
    const [details, setDetails] = useState([])
    const {id} = useParams('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                return(
                    setDetails(res.data)
                    )
            })
            // .then(res => console.log("res.data: ", res.data))
            .catch(err => console.log("Error: ", err))
    },[])
    
    return (
        <div className="App">
                <h1>{details.title}</h1>
                <h2>Price: {details.price}</h2>
                <h2>Description: {details.description}</h2>
        </div>
    )
}

export default Details
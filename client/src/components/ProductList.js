import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
  
    return (
        <div className="App">
            <h1>All Products:</h1>
            {props.product.map((prod, index) => {
                return <p key={index}><Link to={`/product/${prod._id}`} index>{prod.title}</Link></p>
            })}
        </div>
    )
}

export default ProductList
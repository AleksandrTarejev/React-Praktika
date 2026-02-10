import { useState, useEffect } from 'react'
import axios from "axios";

import Card from 'react-bootstrap/Card';

const OneProduct=()=>{
    const [product, setProduct] = useState(null)
    useEffect(()=>{
      axios.get('https://dummyjson.com/products/1').then(response=>setProduct(response.data))
    },[])

    if(!product){
      return <h1>Loading....</h1>
    }

    return(
        // <>
        // <h2>{product.title}</h2>
        // <p>{product.price}</p>        
        // <p>{product.description}</p>
        // </>


    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: {product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default OneProduct;
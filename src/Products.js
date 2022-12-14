import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {add} from './store/cartSlice'
import Button from '@mui/material/Button';


const Products = () => {
   const dispatch = useDispatch()
   const handleAdd = (product) =>{
        dispatch(add(product))
   }
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts =async () =>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            // console.log(data)
            setProducts(data)
        }
        fetchProducts()
    })
  return (
    <div className='productsWrapper'>
        {
            products.map(product =>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    {/* <button className='btn'onClick={()=>handleAdd(product)}>Add to Cart</button> */}
                      <Button variant="contained" onClick={()=>handleAdd(product)}>Add to Cart</Button>

                </div>
            ))
        }
    </div>
  )
}

export default Products

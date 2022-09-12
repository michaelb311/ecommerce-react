import React from 'react'
import Product from '../components/Products';
import data from '../data.js'

export default function HomeScreen() {
  return (
    <div className="row center">
        {
        data.products.map((product) => (
            <Product key={product.id} product={product}/>
        ))
        }
    </div>
  )
}

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Products';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err){
        setError(err.message);
        setLoading(false);
      } 
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
      <LoadingBox></LoadingBox>
      ) :error ? (
      <MessageBox variant='danger'>{error}</MessageBox>
      ) : (<div className="row center">
        {
          products.map((product) => (
            <Product key={product.id} product={product}/>
        ))
        }
        </div>)
      }
    </div>
  )
}

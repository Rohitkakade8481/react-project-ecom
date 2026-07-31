import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from './api';
import Navbar from '../component/Navbar';

const ProductDetails = () => {
    const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added To Cart");

};

const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
<Navbar />

      <div className="max-w-6xl mx-auto p-5">

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-96 object-cover rounded"
          />

          <div>

            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <h2 className="text-2xl text-blue-600 mt-3">
              ₹ {product.price}
            </h2>

            <p className="mt-5">
              {product.description}
            </p>

            <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white w-1/2 py-2 rounded"
    >
      Add To Cart
    </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios';
import api from './api';
import { Link } from 'react-router-dom';

const Home = () => {
     const [products, setProducts] = useState([]);
     const [product, setProduct] = useState([]);
const [search, setSearch] = useState("");

   useEffect(() => {
    api.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (product) => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added Successfully");

};

  return (
     <>
      <Navbar />

      <input
  type="text"
  placeholder="Search Product..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 rounded w-full mb-5"
/>

      <div className="max-w-7xl mx-auto p-5">

        <h1 className="text-3xl font-bold text-center mb-8">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  ).map((product) => (

            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl"
            >

              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-60 object-cover rounded"
              />

              <h2 className="text-lg font-bold mt-3">
                {product.title}
              </h2>

              <p className="text-blue-600 text-xl font-bold mt-2">
                ₹ {product.price}
              </p>

              <div className="flex gap-2 mt-4">

                <Link
                  to={`/product/${product.id}`}
                  className="w-1/2"
                >
                    <button className="bg-green-600 text-white w-full py-2 rounded">
        Details
      </button>
                 
                </Link>
 <button
                             onClick={() => addToCart(product)}
                                   className="bg-blue-600 text-white w-1/2 py-2 rounded"
>
                                       Add To Cart
</button>
               
              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Home
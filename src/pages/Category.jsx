import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from './api';
import Navbar from '../component/Navbar';

const Category = () => {
     const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
    <div className="max-w-7xl mx-auto p-5">

        <h1 className="text-3xl font-bold text-center mb-8">
          Category Products
        </h1>

        {
          products.length === 0 ? (

            <h2 className="text-center text-2xl">
              No Products Available
            </h2>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="border rounded-lg shadow-lg p-4"
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

          )
        }

      </div>

    </>
  )
}

export default Category
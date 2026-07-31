import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(data);

  }, []);

  const increaseQuantity = (index) => {

  let data = [...cart];

  data[index].quantity += 1;

  setCart(data);

  localStorage.setItem("cart", JSON.stringify(data));
}

const decreaseQuantity = (index) => {

  let data = [...cart];

  if (data[index].quantity > 1) {
    data[index].quantity -= 1;
  }

  setCart(data);

  localStorage.setItem("cart", JSON.stringify(data));
};

  const removeProduct = (index) => {

    let data = [...cart];

    data.splice(index, 1);

    setCart(data);

    localStorage.setItem("cart", JSON.stringify(data));

  };

  const totalPrice = cart.reduce((total, item) => {

    return total + item.price;

  }, 0);
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-5">

        <h1 className="text-3xl font-bold text-center mb-8">
          My Cart
        </h1>

        {
          cart.length === 0 ?

            <h2 className="text-center text-2xl">
              Cart is Empty
            </h2>

            :

            <>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {
                  cart.map((item, index) => (

                    <div
                      key={index}
                      className="border rounded-lg shadow p-4"
                    >

                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-52 object-cover rounded"
                      />

                      <h2 className="text-xl font-bold mt-3">
                        {item.title}
                      </h2>

                      <p className="text-blue-600 font-bold mt-2">
                        ₹ {item.price * item.quantity}
                      </p>

                      <div className="flex items-center gap-2 mt-4">

                        <button
                          onClick={() => decreaseQuantity(index)}
                          className="bg-gray-600 text-white w-10 h-10 rounded-full"
                        >
                          -
                        </button>

                        <span className="text-lg font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(index)}
                          className="bg-gray-600 text-white w-10 h-10 rounded-full"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => removeProduct(index)}
                        className="bg-red-600 text-white w-full py-2 rounded mt-4"
                      >
                        Remove
                      </button>

                    </div>

                  ))
                }

              </div>

              <div className="mt-10 border p-5 rounded">

                <h2 className="text-2xl font-bold">
                  Total : ₹ {totalPrice }
                </h2>

                

                  <button className="bg-green-600 text-white px-6 py-3 rounded mt-5">

                    Checkout

                  </button>

                

              </div>

            </>

        }

      </div>

    </>
  );
}

export default Cart
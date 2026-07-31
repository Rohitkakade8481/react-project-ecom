import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
 <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          ShopEasy
        </h1>

        <ul className="flex gap-6">

          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/category/1">Clothes</Link>
          </li>

          <li>
            <Link to="/category/2">Electronics</Link>
          </li>

          <li>
            <Link to="/category/3">Furniture</Link>
          </li>

          <li>
            <Link to="/category/4">Shoes</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/">Login</Link>
          </li>

        </ul>

      </div>
    </nav>

    </div>
  )
}

export default Navbar
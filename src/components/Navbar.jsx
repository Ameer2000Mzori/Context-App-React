import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // State to manage the toggle for showing links
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the state
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="w-full h-16 fixed top-0 left-0 flex items-center justify-evenly bg-zinc-400 px-4">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>Menu</button>
        </div>
        <ul
          className={`md:flex ${
            isOpen ? 'flex ' : 'hidden'
          } flex-col md:flex-row h-[50vh] md:justify-between md:h-[30px] items-center absolute md:relative bg-zinc-400 w-full md:w-auto top-0 justify-evenly `}
        >
          <li className=" absolute top-4 right-2 md:hidden ">
            <p onClick={() => setIsOpen(false)}>close Menu</p>
          </li>
          <li className="p-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="p-2">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

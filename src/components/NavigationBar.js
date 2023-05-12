import React from 'react'
import { Navbar } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {


  return (
   <Navbar
  fluid={true}
  rounded={true}
>
  <Link to="/" className='flex items-center'>
    <img
      src="https://static.vecteezy.com/system/resources/previews/000/349/270/original/vector-calculator-icon.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Crspro"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Crspro.
    </span>
  </Link>
            <Link to="/CrossProduct" className="flex md:order-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <button className="btn btn-primary ">
            Get Started
            </button>
            </Link>
  <Navbar.Collapse>
  <Link to="/Beranda" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <button className="btn btn-primary ">
            Beranda
            </button>
            </Link>
    <Link to="/CrossProduct" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <button className="btn btn-primary ">
            Mulai
            </button>
            </Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavigationBar
import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

const NavigationBar = () => {


  return (
    <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="https://flowbite.com/">
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
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>
        Get started
      </Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link>
        Home
      </Navbar.Link>
      <Navbar.Link>
        About
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavigationBar
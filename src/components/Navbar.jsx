import React from 'react'
import logo from '../assets/logo.png' 
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'


const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <div>
      <nav className="stick top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt ="" className="h-10 w-10 mr-2"/>
                    <span className="text-xl tracking-tight">Virtual</span>
                </div>
                
                    <ul className="sm:hidden md:hidden lg:flex ml-14 space-x-12">
                          {navItems.map((item, index) => (
                              <li key={index}>
                                  <a href={item.href} className="hover:text-neutral-400">
                                      {item.label}
                                  </a>
                              </li>
                              
                          ))}
                    </ul>
                    <div className=" lg:flex justify-center space-x-12 items-center  sm:hidden md:hidden">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Login
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 
                        py-2 px-3 border rounded-md">
                            Sign Up
                        </a>
                    </div>
                    <div className="lg:hidden md:flex-col justify-end ">
                        <button onClick={toggleMobileDrawer}>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
            </div>
            {mobileDrawerOpen && (
                <div className="lg:hidden md:flex-col fixed right-0 z-20 
                bg-neutral-900 w-full p-12 flex flex-col justify-center ">
                    <ul className="text-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href} className="hover:text-neutral-400">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 justify-center items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Login
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 
                        py-2 px-3 border rounded-md">
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar

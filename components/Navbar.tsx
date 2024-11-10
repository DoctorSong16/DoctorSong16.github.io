import React from 'react'
import { IoMdMenu } from "react-icons/io";
// import Image from 'next/image'

type Props = {
    menuItems: string[];
    currentPage: string;
}

export default function Navbar(props: Props) {
  return (
    <nav className="bg-maize font-ibarraRealNova">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <a href="https://doctorsong16.github.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center font-semibold text-2xl text-smoky-black font-ibarraRealNova whitespace-nowrap">dundu does stuff</span>
        </a> */}
        {/* Button to open the menu on mobile.*/}
        <button className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden' type='button'>
            <IoMdMenu className='text-smoky-black text-2xl' />
        </button>

        {/* On desktop, we just use a navbar. */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {props.menuItems.map((item) => (
                    <li key={item}>
                        <a href="#" className="text-2xl hover:font-semibold block py-2 px-3 rounded md:p-0" aria-current="page"> {item.toLocaleLowerCase()} </a>
                    </li>
                ))}
            </ul>
        </div>
        {/* {props.menuItems.map((item) => (
            <button key={item} className="p-2 rounded-md bg-maize text-smoky-black">{item}</button>
        ))} */}
      </div>
    </nav>
  )
}
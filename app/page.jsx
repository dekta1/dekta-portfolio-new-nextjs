"use client"
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Home from "../components/Home";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll/modules";

// interface linkItem{
//     id: number;
//     link: string;
// }

const NavBar = () => {

    const[nav, setNav] = useState (false);

    const links = [ 
        {
            id:1,   
            link: "Home"
        },
        {
            id:2,   
            link: "About"
        },
        {
            id:3,   
            link: "Experience"
        },
        {
            id:4,   
            link: "Education"
        },
        {
            id:5,   
            link: "Contact"
        },
    ];

  return (
    <div id="navbar"
    className="bg-gray-900 h-full w-full text-white">
    <div className="flex justify-between items-center w-full px-4 text-sky-50 bg-gray-950 fixed py-3">
        <div>
            <h1 className="text-3xl font-mono ml-2 text-yellow-500">Portfolio</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => 
            (<li
             key={id} 
             className="px-5 cursor-pointer capitalize  text-yellow-300 hover:bg-gray-500 duration-200">
                <Link to={link} smooth duration={500}>{link}</Link>
                </li>

            ))}
 
        </ul>
        <div onClick={() => setNav(!nav) }  className="cursor-pointer pr-4 z-10 text-white md:hidden">
        
        {nav ? <FaTimes size={30} /> : <FaBars size={30}  />}
        </div>
        {nav && (
           
           <ul className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-gray-950 to-gray-800 text-gray-500">

        {links.map(({id, link}) => 
            (<li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl hover:bg-gray-500 text-white">
                   <Link onClick={() => setNav (!nav) } to={link} smooth duration={500}> {link} </Link>
            </li>
        ))}   
            </ul>
        )}
    </div>
    <Home></Home>
    <About></About>
    <Education></Education>
    <Experience></Experience>
    <Contact></Contact>
    </div>
    
  )
}

export default NavBar
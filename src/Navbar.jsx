import React from 'react'
import Container from './Container'

const Navbar = () => {
    return (
        <div className='bg-[#FFFFFF] py-5'>
            <Container>
                <div className="navbar justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><h5>Home</h5></li>
                                <li><h5>FAQ</h5></li>
                                <li><h5>Changelog</h5></li>
                                <li><h5>Blog</h5></li>
                                <li><h5>Download</h5></li>
                                <li><h5>Contact</h5></li>
                            </ul>
                        </div>
                        <h2 className="font-bold text-base  md:text-2xl text-black">CS — Ticket System</h2>
                    </div>
                    <div className="navbar-last items-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black text-lg">
                            <li><h5>Home</h5></li>
                            <li><h5>FAQ</h5></li>
                            <li><h5>Changelog</h5></li>
                            <li><h5>Blog</h5></li>
                            <li><h5>Download</h5></li>
                            <li><h5>Contact</h5></li>
                        </ul>
                    </div>
                    <div className="">
                        <a className="btn bg-gradient-to-r from-[#5140c2] to-[#A855F7] rounded-lg text-white">+ New Ticket</a>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Navbar

import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import {persistor} from '../redux/store';
 
const Navbar = () => {
    const navigate = useNavigate()
    const state = useSelector(state => state.handleCart)
   // const state = persistor.getState();
    console.log(state)


    const handleClearSessionStorage = () => {
        // Clear session storage
        sessionStorage.clear();
        toast.success('You Logged Out')
        navigate('/')

      };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">  
                    <img
                    src="./assets/agrimarketlogo.png"  
                    alt="Agri.Market Logo"
                    style={{ marginRight: '8px', width: '150px', height: '85px' }}  
                    />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/seller">Sellers Zone</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Admin Panel</NavLink>
                        </li> */}
                    </ul>
                    <div className="buttons text-center">
                        {/* <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> */}
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>

                        <NavLink to="/profile" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Profile</NavLink>
                        <NavLink onClick={handleClearSessionStorage} to="/"  className="btn btn-outline-danger m-2"><i className="fa fa-user-exit mr-1"></i> Log Out</NavLink>


                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
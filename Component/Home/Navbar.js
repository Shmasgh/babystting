import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Modale from '../../Component/Home/Routes/Login';

export default function Navbar() {
    return (
        <div className="title-link">
            <nav >
                <div >
                    <h1 className="Title"> Weldi </h1>

                    <NavLink to={'/Signup'} activeClassName="active" className="nav-item nav-link" href="#">Signup</NavLink>
                    <Modale />
                </div>

            </nav>

        </div>
    )
}

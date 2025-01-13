// import React from "react"
import NavLink from "./NavLink"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="header-bar">
                <div>
                    <h1 className="brown-eye">Hetero</h1><h1 className="blue-eye">Codea</h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
            <p className="subtitle">The Art and Code of Niles Bontrager</p>
        </header>
    )
}
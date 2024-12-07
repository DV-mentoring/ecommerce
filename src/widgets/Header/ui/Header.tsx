import React from "react";
import { NavLink } from "react-router-dom";
import "./header.module..scss"
import Input from "../../../shared/ui/Input/Input.tsx";

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <NavLink className="header__link" to="/">Yockium</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <NavLink className="header__link" to="/">Shop</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <NavLink className="header__link" to="/">On Sale</NavLink>
                        </li>
                        <li className="header__menu-item">
                            <NavLink className="header__link" to="/">New Arrivals</NavLink>
                        </li>
                    </ul>
                    <Input placeholder="Search for products..."/>
                </nav>
            </header>
        </>
    )
}

export default Header;

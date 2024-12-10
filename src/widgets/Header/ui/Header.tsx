import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../../shared/ui/Input/Input.tsx";
import styles from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className={styles.header_menu}>
                        <li className={styles.menu_item}>
                            <NavLink className={styles.nav_link} to="/">
                                <img
                                    src="/assets/images/logo.svg"
                                    alt="SHOP.CO"
                                />
                            </NavLink>
                        </li>
                        <div className={styles.nav_menu_container}>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    Shop
                                </NavLink>
                            </li>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    On Sale
                                </NavLink>
                            </li>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    New Arrivals
                                </NavLink>
                            </li>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    Brands
                                </NavLink>
                            </li>
                        </div>
                        <Input placeholder="Search for products..." />
                        <div className={styles.cart_profile_container}>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    <img
                                        src="/assets/images/cart.svg"
                                        alt="cart"
                                    />
                                </NavLink>
                            </li>
                            <li className={styles.menu_item}>
                                <NavLink className={styles.nav_link} to="/">
                                    <img
                                        src="/assets/images/profile.svg"
                                        alt="profile"
                                    />
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.ul}>
                <li><NavLink to='/sweet-bars'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/product'>Product</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;

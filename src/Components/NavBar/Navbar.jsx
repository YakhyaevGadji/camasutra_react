import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) =>`${isActive ? s.active : ''}`}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) =>`${isActive ? s.active : ''}`}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href='#'>News</a>
            </div>
            <div className={s.item}>
                <a href='#'>Music</a>
            </div>
            <div className={s.item}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar;
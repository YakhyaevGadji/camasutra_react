import React from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a className="nav__link" href="">Profile</a>
            </div>
            <div className={s.item}>
                <a className="nav__link" href="">Messages</a>
            </div>
            <div className={s.item}>
                <a className="nav__link" href="">News</a>
            </div>
            <div className={s.item}>
                <a className="nav__link" href="">Settings</a>
            </div>
        </nav>
    );
}
 
export default NavBar;
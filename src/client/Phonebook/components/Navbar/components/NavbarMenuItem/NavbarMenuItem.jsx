import { NavLink } from "react-router-dom";

import styles from './NavbarMenuItem.module.css';

const NavbarMenuItem = ({to, text}) => {
    return (
        <li className={styles.navbarMenuItem}>
            <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.navbarMenuLinkActive}>{text}</NavLink>
        </li>
    );
}

export default NavbarMenuItem;
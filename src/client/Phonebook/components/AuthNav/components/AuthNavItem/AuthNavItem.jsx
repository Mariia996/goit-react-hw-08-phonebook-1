import {NavLink} from "react-router-dom";

import styles from './AuthNavItem.module.css';

const AuthNavItem = ({to, text}) => {
    return (
        <li className={styles.authItem}>
            <NavLink to={to} className={styles.authLink} activeClassName={styles.authLinkActive}>{text}</NavLink>
        </li>
     );
}

export default AuthNavItem;
import AuthNavItem from '../AuthNavItem';

import { menuItems } from './menuItems';
import shortid from 'shortid';

import styles from './AuthNav.module.css';

const AuthNav = () => {
    const authElements = menuItems.map(item => <AuthNavItem key={shortid.generate()} {...item} />)
    return (
        <div className={styles.authContainer}>
            <ul className={styles.authNavContainer}>
                {authElements}
            </ul>
        </div>
    );
}

export default AuthNav;


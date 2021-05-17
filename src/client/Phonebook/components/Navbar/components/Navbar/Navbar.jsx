import shortid from 'shortid';

import NavbarMenuItem from '../NavbarMenuItem';
import { menuItems } from './menuItems';

import styles from './Navbar.module.css';

const Navbar = () => {
    const navbarMenuElements = menuItems.map(item => <NavbarMenuItem key={shortid.generate()} {...item}/>)
    return (
         <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navbarRow}>
                    <ul className={styles.navbarMenu}>
                        {navbarMenuElements}
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;
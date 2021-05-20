import { connect } from 'react-redux';

import { logoutUser } from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './UserMenu.module.css';

const UserMenu = ({ user, onLogout }) => {
    return (
        <div className={styles.userContainer}>
            <div className={styles.imgContainer}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1998/1998767.svg" alt="User Avatar"
                    className={styles.userAvatar} width="26" height="26" />
                </div>
            <p className={styles.menuText}>Welcome, {user.email}</p>
            <a href="#" onClick={onLogout} className={styles.logoutLink}>Logout</a>
    </div>
    );
}

const mapDispatchToProp = dispatch => {
    return {
        onLogout: ()=> {
            dispatch(logoutUser())
    }
    }
}

export default connect(null, mapDispatchToProp)(UserMenu);
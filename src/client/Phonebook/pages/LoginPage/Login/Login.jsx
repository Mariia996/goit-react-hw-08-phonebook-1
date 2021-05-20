
import LoginUserForm from '../../LoginPage/components/LoginUserForm';

import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.loginTitle}>Login to your profile</h2>
                <LoginUserForm />
        </div>
    )
}

export default Login;
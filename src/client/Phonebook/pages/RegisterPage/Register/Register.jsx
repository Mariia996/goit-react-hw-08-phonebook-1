
import RegisterUserForm from '../components/RegisterUserForm';

import styles from './Register.module.css';

const RegisterPage = () => {
    return (<div className={styles.container}>
        <div className={styles.registerContainer}>
            <h2 className={styles.registTitle}>Registration</h2>
            <RegisterUserForm />
        </div>
    </div>)
};

export default RegisterPage;
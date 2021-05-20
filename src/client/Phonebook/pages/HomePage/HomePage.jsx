import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.welcomeTitle}>Welcome to Phonebook!</h1>
        </div>
    );
}

export default HomePage;
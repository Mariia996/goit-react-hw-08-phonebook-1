import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="https://advermedia.ua/wp-content/uploads/2018/04/content5_3-600x315-cropped.png" alt="Page not found" className={styles.notFoundPageImage} />
            </div>
        </div>
     );
}

export default NotFoundPage;
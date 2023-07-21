import styles from "./styles.module.css";

function NavMenu() {
    return (
        <nav>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">Главная</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">Технологии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">График полетов</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">Гарантии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">О компании</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../../../public/index.html">Контакты</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;
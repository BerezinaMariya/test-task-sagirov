import styles from "./styles.module.css";

function NavMenu() {
    return (
        <nav>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">Главная</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">Технологии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">График полетов</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">Гарантии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">О компании</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="../Header/Header#logo">Контакты</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;
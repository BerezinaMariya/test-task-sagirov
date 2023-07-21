import styles from "./styles.module.css";

function NavMenu() {
    return (
        <nav>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">Главная</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">Технологии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">График полетов</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">Гарантии</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">О компании</a>
                </li>
                <li className={styles.menu__item}>
                    <a className={styles.menu__link} href="">Контакты</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;
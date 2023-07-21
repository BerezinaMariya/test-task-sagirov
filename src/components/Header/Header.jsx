import NavMenu from "../NavMenu/NavMenu";
import logo from "../../images/logo.png";

import styles from "./styles.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__logoBorder}>
                    <span>
                        <img className={styles.header__logo} src={logo} alt="Логотип проекта - надпись SPACEX"/>
                    </span>
                </div>
                <NavMenu/>
            </div>
        </header>
    );
}

export default Header;
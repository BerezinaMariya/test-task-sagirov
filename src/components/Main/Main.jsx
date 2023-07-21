import cn from "classnames";

import TextBlock from "../TextBlock/TextBlock";
import line from "../../images/line.png";
import planet from "../../images/mars-kosmos-korabl.png";

import styles from "./styles.module.css";

function Main() {
    return (
        <main className={styles.content}>
            <img className={styles.content__planet} src={planet} alt="Планета Марс, космический корабль"/>
            <div className={styles.content__container}>
                <h1 className={cn(styles.content__text, styles.content__header)}>путешествие</h1>
                <p className={cn(styles.content__text, styles.content__paragraph)}>на красную планету</p>
                <div className={styles.content__buttonBorder}>
                    <button className={styles.content__button}>Начать путешествие</button>
                    <img className={styles.content__line} src={line}
                         alt="Линия от ракеты до кнопки Начать путешествие"/>
                </div>
            </div>
            <section className={styles.content__blocks}>
                <TextBlock
                    variant="white"
                    topText="мы"
                    mainText="1"
                    bottomText="на рынке"
                />
                <TextBlock
                    variant="gray"
                    topText="гарантируем"
                    mainText="50%"
                    bottomText="безопасность"
                />
                <TextBlock
                    variant="white"
                    topText="календарик за"
                    mainText="2001"
                    spanText="г."
                    bottomText="в подарок"
                />
                <TextBlock
                    variant="gray"
                    topText="путешествие"
                    mainText="597"
                    bottomText="дней"
                />
            </section>
        </main>
    );
}

export default Main;
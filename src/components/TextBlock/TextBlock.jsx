import cn from "classnames";

import styles from "./styles.module.css";

function TextBlock({ variant, topText, mainText, spanText, bottomText }) {
    return (
        <article className={styles.block}>
            <p className={cn(styles.block__text, styles.block__text_s, styles[`variant-${variant}`])}>{topText}</p>
            <h2 className={cn(styles.block__text, styles.block__text_xl, styles[`variant-${variant}`])}>
                {mainText}
                <span className={cn(styles.block__text, styles.block__text_s, styles[`variant-${variant}`])}>{spanText}</span>
            </h2>
            <p className={cn(styles.block__text, styles.block__text_s, styles[`variant-${variant}`])}>{bottomText}</p>
        </article>
    );
}

export default TextBlock;
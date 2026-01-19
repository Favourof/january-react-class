import styles from "../modulesCss/Button.module.css"
function Button({ text, colorVariable }) {
    return (
        <div>
            <button className={styles.btn} style={{ color: colorVariable }}>
                {text}
            </button>
        </div>
    )
}

export default Button
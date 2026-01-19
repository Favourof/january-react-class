import styles from "../modulesCss/Navbar.module.css"
function Navbar() {
    return (
        <div className={styles.parent}>
            <div>Logo</div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
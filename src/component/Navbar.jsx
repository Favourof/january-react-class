import { Link, NavLink } from "react-router"
import styles from "../modulesCss/Navbar.module.css"
import { useState } from "react";
function Navbar() {
    const [laptop, setlaptop] = useState({ id: 6, name: "dell", price: 100 });
    return (
        <div className={styles.parent}>
            <div>Logo</div>
            <div>
                <ul>
                    <li> <Link to={"/"}> Home</Link></li>
                    {/* <li>Home</li> */}
                    <NavLink
                        to="/about"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isPending ? "bold" : "",
                                color: isActive ? "red" : "yellow",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >
                        About
                    </NavLink>
                    {/* <li> <Link to={"/about"}>About</Link></li> */}
                    <li> <Link to={"/contact"}>Contact</Link></li>
                    <li> <Link to={"/faq"}>  FAQ</Link></li>
                    <li> <Link to={"/user"}>  user</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
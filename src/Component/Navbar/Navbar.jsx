import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Search } from "react-feather";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Movies App</div>
            <div className={styles.right}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search Movies Name" />
                    <Search />
                </div>
                <p className={styles.link}>Explore</p>
            </div>
        </div>
    );
};

export default Navbar;

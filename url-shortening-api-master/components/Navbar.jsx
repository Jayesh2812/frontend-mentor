import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <header>

            <nav className={styles.navbar}>
                <Link href=''>
                    <a href="" className={styles.logo}>
                        <img src='images/logo.svg' />
                    </a>
                </Link>
                <div tabIndex={1} className={styles.burger}
                    onClick={e => e.target.classList.toggle(styles.active)}
                    onFocus={e => e.target.classList.add(styles.active)}
                    onBlur={e => e.target.classList.remove(styles.active)}
                ></div>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="">
                            <a className={styles.navLink}>Features</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="">
                            <a className={styles.navLink}>Pricing</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="">
                            <a className={styles.navLink}>Resources</a>
                        </Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.login}`} >
                        <Link href="">
                            <a className={styles.navLink}>Login</a>
                        </Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.signup}`}>
                        <Link href="">
                            <a className={styles.navLink}>Sign Up</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

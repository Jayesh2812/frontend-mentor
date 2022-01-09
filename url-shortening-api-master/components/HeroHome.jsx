import Link from 'next/link'
import React from 'react'
import styles from './HeroHome.module.css'

function HeroHome() {

    return (
        <section className={styles["hero-home"]}>
            <h1 className={styles["hero-title"]}>
                More than just shorter links
            </h1>

            <h2 className={styles["hero-description"]}>
                Build your brand’s recognition and get detailed insights on how your links are performing.
            </h2>

            <Link href="#">
                <a href="#"  className={styles["cta-btn"]}>
                    
                Get Started
                </a>
            </Link>
        </section>
    )
}

export default HeroHome

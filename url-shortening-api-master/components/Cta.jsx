import React from 'react'
import Link from 'next/link'
import useStyle from '../utils/useStyle'
import styles from './Cta.module.css'

function Cta() {
    const classes = useStyle(styles)
    return (
        <section className={classes('cta-section')}>
            <h2 className={classes("message")}>Boost your links today</h2>
            <Link href="">
                <a href="" className={classes("cta-btn btn")}>
                    Get Started

                </a>
            </Link>
        </section>
    )
}

export default Cta

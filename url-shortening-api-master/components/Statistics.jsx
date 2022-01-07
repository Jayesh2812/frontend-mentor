import React from 'react'
import styles from './Statistics.module.css'
import useStyle from '../utils/useStyle'

function Statistics() {

    const classes = useStyle(styles)
    return (
        <section className={classes("statistics")}>
            <h2 className={classes("section-title")}>
                Advanced Statistics
            </h2>

            <h3 className={classes("section-description")}>
                Track how your links are performing across the web with our advanced statistics dashboard.

            </h3>

            <div className={classes("cards")}>

                <div className={classes("card")}>
                    <h4 className={classes("card-title")}>Brand Recognition</h4>
                    <p className={classes("card-description")}>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className={classes("card")}>
                    <h4 className={classes("card-title")}>Detailed Records</h4>
                    <p className={classes("card-description")}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className={classes("card")}>
                    <h4 className={classes("card-title")}> Fully Customizable</h4>
                    <p className={classes("card-description")}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>

            </div>
        </section>
    )
}

export default Statistics

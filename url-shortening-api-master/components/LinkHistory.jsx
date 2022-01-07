import React, { useEffect, useState } from 'react'
import useStyle from '../utils/useStyle'
import styles from './LinkHistory.module.css'
import useStorage from '../utils/useStorage'
import useClipBoard from '../utils/useClipBoard'

function LinkHistory() {
    const [data, setData] = useState([])
    const classes = useStyle(styles)

    const {state, dispatch, ACTIONS} = useStorage()
    const {copy, paste} = useClipBoard()

    const handleCopy = string => event =>{
        
        event.target.innerHTML = "Copied!"
        event.target.classList.add(classes("copied-btn"))
        copy(string)
        setTimeout(()=>{
            event.target.innerHTML = "Copy"
            event.target.classList.remove(classes("copied-btn"))

        }, 1000)
    }
    return (
        <section className={classes("previous-links")}>
            {state && state.map(({ actualLink, shortenedLink }) => (

                <div key={shortenedLink} className={classes("previous-link")}>
                    <h2 className={styles["actual-link"]}>{actualLink}</h2>
                    <h2 className={styles["shortened-link"]}>{shortenedLink}</h2>
                    <button
                        className={classes("btn copy-btn")}
                        onClick={handleCopy(shortenedLink)}
                    >
                        Copy
                    </button>
                </div>
            ))}

        </section>
    )
}

export default LinkHistory

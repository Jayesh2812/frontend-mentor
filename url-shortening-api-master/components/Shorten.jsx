import React, { useState, useRef } from 'react'
import useStyle from '../utils/useStyle'
import styles from './Shorten.module.css'
import useStorage from '../utils/useStorage'
import useClipBoard from '../utils/useClipBoard'

function Shorten() {
    const [link, setLink] = useState('')
    const [msg, setMsg] = useState('')
    const {state, dispatch, ACTIONS} = useStorage()
    const {copy} = useClipBoard()
    const classes = useStyle(styles)
    const inputRef = useRef()

    const shortenLink = link => async () => {

        if(!link) {
            setMsg("Please add a link")
            inputRef.current.classList.add(classes('input-error'))
            inputRef.current.focus()
            return
        }

        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then(response => response.json())
            .then(data => {

                if (data.ok) {

                    const shortenedLink = data.result.full_short_link
                    copy(shortenedLink)
                    setMsg("Shortened link copied")
                    dispatch({
                        type : ACTIONS.ADD,
                        payload: {
                            actualLink: link,
                            shortenedLink
                        }
                    })
                }

                else 
                    setMsg(data.error)

            })
    }
    return (
        <section className={classes('main-activity')}>
            <div className={classes("shorten-wrapper")}>

                <input
                    ref={inputRef}
                    type="text"
                    name=""
                    id=""
                    className={styles["actual-url"]}
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    placeholder='Shorten a link here...'
                />
                <button
                    className={classes('shorten-btn')}
                    onClick={shortenLink(link)}
                >
                    Shorten It!
                </button>

                <span className={styles["error-msg"]}>
                    <em> {msg} </em>
                </span>
            </div>
        </section>
    )
}

export default Shorten

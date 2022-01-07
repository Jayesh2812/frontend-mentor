import React, { useContext, useState, useEffect } from 'react'

const ClipBoardContext = React.createContext()

function useClipBoard() {
    return useContext(ClipBoardContext)
}

export const ClipBoardProvider = ({ children }) => {


    const [text, setText] = useState('')
    const copy = text => {
        if (navigator.clipboard){

            navigator.clipboard.writeText(text)
            setText(text)
            return
        }
        alert("ClipBoard not accessible")

    }
    const paste = async () => {

        if (navigator.clipboard) {
            const text = await navigator.clipboard.readText()
            setText(text)
            return text
        }
        alert("ClipBoard not accessible")
        return ''

    }
    useEffect(() => {
        if (navigator.clipboard)
            navigator.clipboard.readText()
                .then(setText)
        else
            alert("ClipBoard not accessible")
    }, [])

    return (

        <ClipBoardContext.Provider value={{ paste, copy }}>
            {children}
        </ClipBoardContext.Provider>
    )
}
export default useClipBoard

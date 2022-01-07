import React, { useContext, useReducer, useEffect } from 'react'
import { reducer, recentLinks, initialState, ACTIONS } from './reducer'
const StorageContext = React.createContext()

export function StorageProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const value = localStorage.getItem(recentLinks);
        dispatch({
            type: ACTIONS.SET,
            payload: value
        })
    }, [])
    return (
        <StorageContext.Provider value={ { ACTIONS, state, dispatch } }>
            {children}
        </StorageContext.Provider>
    )
}

export default function useStorage(){
    return useContext(StorageContext)
}


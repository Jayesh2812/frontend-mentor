import React, {useEffect, useRef} from 'react'

export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()
}

import React from 'react'
const useStyle = (styles) => {
    const g = globalClass => () => globalClass
    const getClassList = (...classes) => {
        const classList = classes.map(classs => typeof classs === 'string' || classs instanceof String ? styles[classs] : classs()).join(' ')
        return classList
    }

    return [getClassList, g]
}

export default useStyle
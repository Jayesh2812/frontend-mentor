import React from 'react'
const useStyle = (styles) => (...classes) => {
    const classList = classes.map(classs => styles[classs]).join(' ')
    return classList
}

export default useStyle
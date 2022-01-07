import React from 'react'

function useStyle(styles) {

    const classes = (...classNames) => {
        classNames = classNames.map(className => className.split(' ')).flat()
        return classNames.map( className => styles[className]).join(' ')
    }
    return classes
}

export default useStyle

import React from 'react'

function Error(props) {
    return (
        <div className={`x-alert x-alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}

export default Error

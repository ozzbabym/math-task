import React from 'react'
import { Redirect } from 'react-router-dom'

function Example({state}) {
    
    if(!state.auth) {return (<Redirect to={'/'} />)}
    return (
        <div>
            <div>Реши математические задачи</div>
            
        </div>
    )
}

export default Example
    
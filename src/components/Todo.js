import React, {useState} from 'react'

function Todo(props) {

    const styleDiv = {
        display: 'flex'
    }

    return (    
        <div style={styleDiv}>
            <p>{props.id}{props.text}</p>
            <button>x</button>
        </div>
    )
}

export default Todo

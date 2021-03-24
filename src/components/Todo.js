import React from 'react'

function Todo(props) {

    const styleDiv = {
        display: 'flex'
    }

    return (    
        <div style={styleDiv}>
            <p>Id:{props.id} ---- {props.text}</p>
            <button>x</button>
        </div>
    )
}

export default Todo

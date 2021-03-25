import React, {useState} from 'react'

function Todo(props) {

    const [state, setState] = useState({
        id: props.id,
        checked: false
    })

    function handleClick() {
        props.handleClick(state.id)
    }

    const handleChange = () => {
        setState({...state, checked: !state.checked})
    }

    const checked = {
        color: "lightgrey",
        fontStyle: "italic",
        textDecorationLine: "line-through"
    }

    return (    
        <div className="todo">
            <input type="checkbox" onChange={handleChange} defaultChecked={state.checked}/>
            <p style={state.checked ? checked : {}}>{props.text}</p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Todo

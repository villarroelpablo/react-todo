import React, {useState} from 'react'

function TodoForm(props) {

    const [state, setState] = useState({
        inputText: "",
    })

    const handleChange = event => {
        setState(prevState => {
            return {
                inputText: event.target.value
            }
        })
    }

    const handleClick = () => {
        props.handleClick(state.inputText)

        setState({inputText: ""})

    }

    const handleSubmit = e => {
        e.preventDefault()
        handleClick()
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" onChange={handleChange} value={state.inputText} placeholder="Add a todo..."/>
            <button type="button" size="" onClick={handleClick}>Add</button>
            <button type="button" size="" onClick={props.handleClear}>Clear</button>
        </form>
    )
}

export default TodoForm

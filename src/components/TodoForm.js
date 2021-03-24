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

    function handleSubmit(e) {
        alert('submited')
    }

    return (
        <form>
            <input type="text" onSubmit={handleSubmit} onChange={handleChange} value={state.inputText} placeholder="Add something..."/>
            <button type="button" onClick={handleClick}>Add</button>
        </form>
    )
}

export default TodoForm

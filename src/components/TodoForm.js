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

    return (
        <form>
            <input type="text" onChange={handleChange} value={state.inputText} placeholder="Add something..." required/>
            <button type="button" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default TodoForm

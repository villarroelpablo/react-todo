import React, {useState}  from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {

    const [state, setState] = useState({
        todos: [],
        currentId: 0,
    })

    const handleClick = todoText => {
        const obj = {
            text: todoText,
            id: state.currentId
        }
        let a = state.todos
        a.unshift(obj)

        setState({
            todos: a,
            currentId: state.currentId + 1
        })
    }

    const handleClear = () => {
        setState({currentId: 0, todos: []})
    }


    return (
        <div className="main-container">
            <h1>React Todo</h1>
            <TodoForm handleClick={handleClick} handleClear={handleClear}/>
            <TodoList todos={state} setTodos={setState}/>
        </div>
    )
}




export default App;
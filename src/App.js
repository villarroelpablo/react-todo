import React, {useState}  from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

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

        console.log(state.todos)
    }


    return (
        <div>
            TODO APP
            <TodoForm handleClick={handleClick}/>
            <TodoList todos={state.todos}/>
        </div>
    )
}




export default App;
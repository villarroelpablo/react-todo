import React, {useState}  from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

    const [state, setState] = useState({
        todos: [{id: 0, text: 'hola mundo'}],
        currentId: 1,
    })

    const handleClick = todoText => {
        const obj = {id: state.currentId, text: todoText}
        let a = state.todos
        a.unshift(obj)
        setState({todosText: a})
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
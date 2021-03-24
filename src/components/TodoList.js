import React from 'react'
import Todo from './Todo'

function TodoList(props) {

    const todosComponents = props.todos.map( todo => <Todo key={todo.id} text={todo.text} id={todo.id} />)

    return (
        <div>
            {todosComponents}
        </div>
    )
}

export default TodoList

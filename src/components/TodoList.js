import React, {useState} from 'react'
import Todo from './Todo'

function TodoList(props) {

    const test = props.todos.map( ex => <Todo key={ex.id} id={ex.id} text={ex.text} />)

    console.log()

    return (
        <div>
            
        </div>
    )
}

export default TodoList

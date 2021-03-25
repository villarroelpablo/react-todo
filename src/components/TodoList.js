import React from 'react'
import Todo from './Todo'

function TodoList(props) {


    const handleClick = id => {

        for(let i = 0; i < props.todos.todos.length; i++){
            if(props.todos.todos[i].id === id){
                console.log('ENCONTRADO')
                let temporalTodos = props.todos.todos
                temporalTodos.splice(i, 1)
                props.setTodos({
                    ...props.todos,
                    todos: temporalTodos
                })
            }
        }

        console.log(todosComponents)

    }

    const todosComponents = props.todos.todos.map( todo => <Todo key={todo.id} text={todo.text} id={todo.id} handleClick={handleClick}/>)
    
    return (
        <div className="list-container">
            {todosComponents}
        </div>
    )
}

export default TodoList

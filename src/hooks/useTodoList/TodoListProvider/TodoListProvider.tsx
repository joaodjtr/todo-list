import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";
import { ContextValue, CreateTodo, DeleteTodo, EditTodo, Todo } from "./types";

const storageAddress = 'todo-list'

export const TodoListContext = createContext<ContextValue>({
    todos: [],
    createTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {}
})

const TodoListProvider = ({children}: {children: React.ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem(storageAddress) || '{}')
        if(storage.todos){
            setTodos(storage.todos)
        }
    },[])

    useEffect(() => {
        const todosToString = JSON.stringify({todos})
        localStorage.setItem(storageAddress, todosToString)
    },[todos])

    const createTodo: CreateTodo = (content) => {
        content = content.trim()

        if(content){
            const newTodo: Todo = { id: nanoid(), content, done: false }
            setTodos([newTodo,...todos])
        }
    }

    const editTodo: EditTodo = (id, {content, done}) => {
        setTodos(todos => todos.map(todo => {
            if(todo.id === id){
                todo.content = content !== undefined ? content : todo.content
                todo.done = done !== undefined ? done : todo.done
            }
            return todo
        }))
    }
    
    const deleteTodo: DeleteTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return(
        <TodoListContext.Provider value={{todos, createTodo, editTodo, deleteTodo}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider
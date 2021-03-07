import { useContext } from "react"
import { TodoListContext } from "./TodoListProvider/TodoListProvider"

const useTodoList = () => useContext(TodoListContext)

export default useTodoList
export interface ContextValue{
    todos: Todo[]
    createTodo: CreateTodo
    editTodo: EditTodo
    deleteTodo: DeleteTodo
}

export interface Todo{
    id: string
    done: boolean
    content: string
}

export interface CreateTodo{
    (content: string): void
}

export interface EditTodo{
    (id: string, {content, done}: {content?: string, done?: boolean}): void
}

export interface DeleteTodo{
    (id: string): void
}
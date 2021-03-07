import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { DoneRounded as Done, DeleteRounded as Delete } from '@material-ui/icons'
import styled from "styled-components"
import { Props } from './types'
import useTodoList from '../../../../../hooks/useTodoList/useTodoList'

const Todo: FC<Props> = ({todo}) => {
    const { editTodo, deleteTodo } = useTodoList()
    const [lastValidContent, setLastValidContent] = useState(todo.content)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const resize = useCallback((element: HTMLTextAreaElement) => {
        element.style.height = 'auto'
        element.style.height = element.scrollHeight + 'px'
        const { value } = element
        editTodo(todo.id, {content: value})
        
        if(value.trim()){
            setLastValidContent(value)
        }
    }, [todo, editTodo])

    const handleOnBlur = (element: HTMLTextAreaElement) => {
        if(!todo.content.trim()){
            editTodo(todo.id, {content: lastValidContent})
            element.value = lastValidContent
            resize(element)
        }
    }

    useEffect(() => {
        if(textareaRef.current)
            resize(textareaRef.current)
    //eslint-disable-next-line
    },[])

    return(
        <TodoStyled data-cy="todo">
            <Checkbox 
                role="checkbox"
                aria-checked={todo.done}
                onClick={() => editTodo(todo.id, {done: !todo.done})}
            >
                <Done/>
            </Checkbox>
            <TodoContent isDone={todo.done}>
                <textarea
                    ref={textareaRef}
                    value={todo.content}
                    onInput={e => resize(e.currentTarget)}
                    onBlur={e => handleOnBlur(e.currentTarget)}
                    rows={1}
                />
            </TodoContent>
            <DeleteTodo
                aria-label="Delete todo"
                data-cy="todo-delete-button"
                onClick={() => deleteTodo(todo.id)}
            >
                <Delete/>
            </DeleteTodo>
        </TodoStyled>
    )
}

export default Todo

const TodoContent = styled.article<{isDone: boolean}>`
    display: flex;
    align-items: center;
    flex: 1;
    white-space: pre-line;
    padding: 0 8px;

    textarea{
        width: 100%;
        resize: none;
        background: inherit;
        font-size: 1.1em;
        color: #222;
        overflow: hidden;
        transition: .25s;

        ${({isDone}) => {
            if(isDone){
                return `
                    text-decoration: line-through;
                    opacity: .65;
                `
            }
        }}
    }
`

const TodoButton = styled.button`
    height: 26px;
    width: 26px;
    background: #ccc;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    transition: .25s;

    svg{
        fill: #222;
        height: 100%;
        width: 100%;
        transition: .25s;
    }
`

const Checkbox = styled(TodoButton)`
    svg{
        opacity: .25;
    }

    &[aria-checked=true]{
        background: #121212;

        svg{
            opacity: 1;
            fill: #eee;
        }
    }
` 

const DeleteTodo = styled(TodoButton)`
    position: absolute;
    z-index: 1;
    right: 16px;
    opacity: 0;
`

const TodoStyled = styled.div`
    padding: 12px 16px;
    width: 100%;
    margin: 12px 0 0 0;
    background: #eee;
    border-radius: 4px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, .8);

    &:first-child{
        margin: 0;
    }

    &:hover ${DeleteTodo}{
        opacity: 1;
    }
`
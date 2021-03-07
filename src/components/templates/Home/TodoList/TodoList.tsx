import { useEffect, useState } from "react"
import { useTransition, animated } from "react-spring"
import styled from "styled-components"
import useTodoList from "../../../../hooks/useTodoList/useTodoList"
import Todo from './Todo/Todo'
import { Container as container } from '../styles'

const TodoList = () => {
    const {todos} = useTodoList()
    const [showTodos, setShowTodos] = useState(true)
    const transitions = useTransition(showTodos, null, {
        from: { 
            opacity: 0,
            position: 'absolute',
            width: "100%"
        },
        enter: { 
            opacity: 1,
            position: 'relative',
        },
        leave: { 
            opacity: 0,
            position: 'absolute',
        }
    })

    useEffect(() => {
        setShowTodos(todos.length > 0)
    },[todos])

    return(
        <Container>
            {
                transitions.map(({item, key, props}) => (
                    item
                    ? <animated.div data-cy="todos" key={key} style={props}>
                        {
                            todos.map(todo => (
                                <Todo key={`todo-${todo.id}`} todo={todo}/>
                            ))
                        }
                    </animated.div>
                    : <animated.div key={key} style={props}>
                        <Empty>
                            <span>
                                Nothing to show here... <br/>
                                Add a new task to see it here
                            </span>
                        </Empty>
                    </animated.div>
                ))
            }
        </Container>
    )
}

export default TodoList

const Empty = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    span{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        color: #eee;
        line-height: 1.5;
        opacity: .65;
    }
`

const Container = styled(container)`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
`
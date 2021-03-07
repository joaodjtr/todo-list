import TodoListProvider from '../../../hooks/useTodoList/TodoListProvider/TodoListProvider'
import NewTodo from './NewTodo/NewTodo'
import TodoList from './TodoList/TodoList'
import { Flex, Section } from './styles'

const Home = () => {
    return(
        <TodoListProvider>
            <Flex>
                <NewTodo/>
                <Section>
                    <TodoList/>
                </Section>
            </Flex>
        </TodoListProvider>
    )
}

export default Home
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useTodoList from "../../../../hooks/useTodoList/useTodoList"
import Button from "../../../elements/Button/Button"
import Input from "../../../elements/Input/Input"
import { Section as section } from '../../../layout/BasicLayout/BasicLayout'
import { Container } from '../styles'

const NewTodo = () => {
    const [content, setContent] = useState('')
    const { createTodo } = useTodoList()
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleCreateTodo()
        }
    }

    const handleCreateTodo = () => {
        createTodo(content)
        setContent('')
    }

    return(
        <Section>
            <Container>
                <Fieldset>
                    <Input
                        placeholder="New task"
                        ref={inputRef}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        onKeyUp={handleKeyUp}
                        data-cy="input-new-task"
                    />
                    <Button 
                        onClick={handleCreateTodo}
                        data-cy="submit-new-task"
                    >
                        <span>Save</span>
                    </Button>
                </Fieldset>
            </Container>
        </Section>
    )
}

const Fieldset = styled.fieldset`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;

    ${Input}{
        flex: 1;       
        margin: 0 8px 0 0; 
    }

    ${Button}{
        min-width: 55px;
    }

    @media(max-width: 320px){
        ${Button}{
            font-size: .7em;
        }
    }

    @media(max-width: 275px){
        flex-flow: column nowrap;

        & > *{
            flex: inherit;
            min-width: inherit;
            width: 100%;
            margin: 0;
        }

        ${Button}{
            margin: 8px 0 0 0;
        }
    }
`

const Section = styled(section)`
    min-height: inherit;
    padding-bottom: 0;

    @media(max-width: 640px){
        order: 2;
        z-index: 3;
        position: sticky;
        bottom: 0;
        background: rgba(0,0,0, .6);
        padding-top: 16px;
        padding-bottom: 16px;
        box-shadow: 0 -3px 12px -3px rgba(0, 0, 0, .8);
        backdrop-filter: blur(10px);
    }
`

export default NewTodo
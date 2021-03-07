import { FC } from "react";
import styled from "styled-components";

const BasicLayout: FC = ({children}) => {
    return(
        <Section>
            <Container>
                {children}
            </Container>
        </Section>
    )
}

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1400px;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
`

export const Section = styled.section`
    min-height: 100%;
    width: 100%;
    padding: 32px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media(max-width: 375px){
        padding: 32px 16px;
    }

    @media(max-width: 320px){
        padding: 32px 12px;
    }
`

export default BasicLayout
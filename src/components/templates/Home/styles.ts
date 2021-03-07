import styled from "styled-components";
import { Section as section } from '../../layout/BasicLayout/BasicLayout'

export const Container = styled.div`
    width: 100%; 
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
`

export const Section = styled(section)`
    order: 2;
    flex: 1;

    @media(max-width: 640px){
        order: 1;
        padding-bottom: 8px;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100%;
`
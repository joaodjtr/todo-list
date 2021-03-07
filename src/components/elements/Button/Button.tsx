import styled from 'styled-components'

const Button = styled.button`
    padding: 16px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    background: #4a47a3;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, .8);

    @media(max-width: 375px){
        padding: 12px 8px;
    }
`

export default Button
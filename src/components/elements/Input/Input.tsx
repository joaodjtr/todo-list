import styled from 'styled-components'

const Input = styled.input`
    font-size: 1em;
    padding: 16px;
    border-radius: 4px;
    background: #eee;
    color: #222;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, .8);

    &::placeholder{
        color: #222;
        opacity: .7;
    }

    @media(max-width: 375px){
        padding: 12px 8px;
    }
`

export default Input
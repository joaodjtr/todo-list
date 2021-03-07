import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body, #root{
        height: 100%;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        color: #eee;
        background: #121212;
    }

    body a{
        color: #809fff;
    }

    table{
        border-collapse: collapse;
        border-spacing: 0;
    }

    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    *, button, input, textarea{
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        letter-spacing: 1px;
        
        &, &::placeholder{
            color: #eee;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    }   
`
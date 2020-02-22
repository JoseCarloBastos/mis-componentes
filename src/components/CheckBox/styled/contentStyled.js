import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    from {
        box-shadow: 0;
        font-size: 10px
    }
    to {
        box-shadow: -3px -3px #CFD7EC, -3px 3px #CFD7EC, 3px -3px #CFD7EC, 3px 3px #CFD7EC;
        font-size: 14px
    }
`

const ContentStyled = styled.div`
    display: inline-block;
    margin: 50px 50px;
    border: 1px solid black;
    border-radius: 12px;
    padding: 20px;
    
    > input[type=checkbox] {
        display: none;
    }

    > label:before {
        content: '';
        background: #E1E1E1;
        border-radius: 6px;
        display: inline-block;
        width: 20px; height: 20px;
        margin-right: 10px;
        text-align: center;
        vertical-align: middle;
    }

    > input[type=checkbox]:checked + label:before{
        content: '✓';
        // font-size: 14px;
        color: white;
        background: #537BEE;
        font-family: 'Times New Roman';
        animation: ${animation} 0.2s;
    }
`

export default ContentStyled
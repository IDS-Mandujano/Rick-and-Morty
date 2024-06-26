import styled from "styled-components";

const TitleStyled = styled.h1`
    font-size: 100px;
    color: #131220;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 0.12em;
`

function Title(){
    return <TitleStyled>The Rick and Morty API</TitleStyled>
}

export default Title
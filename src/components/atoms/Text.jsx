import styled from "styled-components";

const TextStyled = styled.p`
    color: #ffffff;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
`
function Text({text,status}){
    return <TextStyled>{status} {text}</TextStyled>
}

export default Text
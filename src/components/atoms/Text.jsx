import styled from "styled-components";

const TextStyled = styled.p`
    color: #ffffff;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
`
function Text(props){
    return <TextStyled>{props.text}</TextStyled>
}

export default Text
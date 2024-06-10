import styled from "styled-components";

const TextStyled = styled.h2`
    color: #ffffff;
    font-size: 20x;
    font-family: Arial, Helvetica, sans-serif;

    &:hover{
        color: orange;
        transition: 0.2s;
    }
`;

function Name(props){
    return <TextStyled>{props.name}</TextStyled>
}

export default Name
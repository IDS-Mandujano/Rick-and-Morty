import styled from "styled-components";

const ImageStyled = styled.img`
    opacity: 0.1;
    width: 90%;
`

function Background({image}){
    return <ImageStyled src={image}/>
}

export default Background
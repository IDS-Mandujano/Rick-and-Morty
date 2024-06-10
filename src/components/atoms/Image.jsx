import styled from "styled-components"

const ImageStyled = styled.img`
    display: flex;
    width: 100%;
    height: auto;
    border-radius: 5px;
`

function Image(props){
    return <ImageStyled src={props.image}/>
}

export default Image
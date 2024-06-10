import styled from "styled-components";
const SpanStyled = styled.span`
    color: #999999;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
`

function Span(props){
    return <SpanStyled>{props.subtitle}</SpanStyled>
}

export default Span
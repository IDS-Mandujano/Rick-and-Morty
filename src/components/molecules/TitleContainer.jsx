import Title from "../atoms/Title"
import Background from "../atoms/Background"
import './titleContainer.css'

function Container({image}){
    return(
        <div id="title-container">
            <div id="bg-container">
                <Background image={image}/>
            </div>
            <Title/>
        </div>
    )
}

export default Container
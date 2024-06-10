import './cards.css'
import Text from '../atoms/Text'
import Span from "../atoms/Span"
import Name from '../atoms/Name'
import Image from '../atoms/Image'

function Cards(props){
    return(
        <div id="card-container">
            <div id="img-container">
                <Image image={props.image}/>
            </div>
            <div id="info-container">
                <div id="name-container">
                    <Name name={props.name}/>
                    <div id="status-container">
                        <span id={props.status}/>
                    </div>
                    <div id="species-container">
                        <Text text={props.species} status={props.status}/>
                    </div>
                </div>
                <div>
                    <Span subtitle={"Lugar de origen"}/>
                    <Text text={props.origin}/>
                </div>
                <div>
                    <Span subtitle={"Ultima locacion conocida"}/>
                    <Text text={props.location}/>
                </div>
            </div>
        </div>
    )
}

export default Cards
import './home.css'
import SectionCards from "../components/organisms/SectionCards";
import SectionTitle from "../components/organisms/SectionTitle";

function Home(){
    return (
        <div id="home">
            <div id="section-title"><SectionTitle/></div>
            <div id="section-cards"><SectionCards/></div>
        </div>
    )
}

export default Home
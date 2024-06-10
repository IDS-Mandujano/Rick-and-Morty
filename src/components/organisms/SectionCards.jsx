import { useState,useEffect } from 'react'
import Cards from '../molecules/Cards'
import './sectionCards.css'

function SectionCards(){

    const [characters,setCharacters] = useState([])
    let i = 0

    useEffect(()=> {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
          if (response.ok)
            return response.json()
          else
            alert('No fue posible establer comunicación con el server')
        })
        .then(data => {
          setCharacters(data.results)
          console.log(data.results);
        })
        .catch(error =>{
          console.log(error);
        })  
      },[i])

  return (
    <div id="cards-section">
      {
      characters.map(item =>
        <Cards 
        key={""}
        image={item.image} 
        name={item.name} status={item.status}
        origin={item.origin.name}
        location={item.location.name}
        species={item.species}
        />
      )
      }
    </div>
  )
}

export default SectionCards
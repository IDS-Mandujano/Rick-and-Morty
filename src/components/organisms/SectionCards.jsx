import { useState,useEffect } from 'react'
import Cards from '../molecules/Cards'
import Swal from 'sweetalert2'
import './sectionCards.css'
import '@sweetalert2/theme-bulma'

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
          Swal.fire("Los datos se han obtenido exitosamente")
          console.log(data.results);
        })
        .catch(error =>{
          console.log(error);
        })  
      },[i])

  return (
    <div id="cards-section">
      {
      characters.map((item,index) =>
        <Cards 
        key={index}
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
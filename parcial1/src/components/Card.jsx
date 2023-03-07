import React from 'react'
import './Card.css'


const Card = ({nombre,peliculaFavorita}) => {
  return (
    <div className='card'>
        <h4>Hola {nombre}!</h4>
        <h4>Sabemos que tu pelicula favorita es:</h4>
        <h4 className='pelicula-favoria'>{peliculaFavorita}</h4>
    </div>
  )
}

export default Card
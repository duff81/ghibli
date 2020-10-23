import React from 'react'
import FilmLook from './FilmLook'

let Timeline = (props) => {
   return props.filmsArray.map(filmLookFilmArray => <FilmLook filmsArray={filmLookFilmArray}/>)
   
}

export default Timeline
import React from 'react'
import FilmLook from './FilmLook'

let Timeline = (props) => {
   return props.filmsArray.map(filmLookFilmArray => <FilmLook filmsArray={filmLookFilmArray}/>)
   return props.peopleArray.map(filmLookFilmArray => <FilmLook peopleArray={filmLookFilmArray}/>)
}

export default Timeline
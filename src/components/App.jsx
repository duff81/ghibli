import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import "./FilmLook";
import "./Timeline";
import Timeline from "./Timeline";
import logo from "./logo.png"

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmsArray: [],
      showFilms: false,
    };
  }

  componentDidMount = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => {
        this.setState({
          filmsArray: films,
        });
      })
      .then(console.log(this.filmsArray))
      .catch((err) => console.log(err));
  };
  showFilmClicked(){this.setState({showFilms:true})}
  showPeopleClicked(){this.setState({showPeople:true})}
  render() {
    if (this.state.showPeople) {

        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((people) => {
          this.setState({
            peopleArray: people,
          });
        })
        
        .then(console.log(this.peopleArray))
        .catch((err) => console.log(err));

      return (
        <React.Fragment>
          <div> <img src={logo} alt="" srcset=""/> </div>
          <button onClick={() => this.showFilmClicked()}>
              
              
            {" "}
            show films{" "}
          </button>
          <button onClick={()=>this.showPeopleClicked()}>show people</button>
        </React.Fragment>
      );
    } else if (this.state.showFilms) {
      return (
        <React.Fragment>
          <Timeline filmsArray={this.state.filmsArray} />
        </React.Fragment>
      );

      //    <div>
      //        <ul>
      //            {filmsArray.map(filmsArray=>(
      //                <li key={filmsArray.id}>
      //                    {filmsArray.title}
      //                    {filmsArray.description}
      //                </li>
      //            ))}
      //        </ul>
      //    </div>
    }
  }
}

export default App;

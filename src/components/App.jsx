import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import "./FilmLook";
import "./Timeline";
import Timeline from "./Timeline";
import PeopleLook from "./PeopleLook"
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmsArray: [],
      peopleArray: [],
      showFilms: false,
      showPeople: false
    };
  }

  componentDidMount()  {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => {
        this.setState({
          filmsArray: films,
        });
      })
      .catch((err) => console.log(err));
  };

  homeClicked = () => {
    this.setState({ showFilms: false });
    this.setState({ showPeople: false });
  }

  showFilmClicked = () => {
    this.setState({ showFilms: true });
  }

  showPeopleClicked = () => {
    this.setState({ showPeople: true });
  }

  render() {
    if (this.state.showPeople) {
      fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((obj) => {
          this.setState({peopleArray: obj});
        })
        .catch((err) => console.log(err));

      return (
        <React.Fragment>
         
            <img src={logo} class="mx-5 my-5" onClick={() => this.homeClicked()}/>
          
          {this.state.peopleArray.map(person => <PeopleLook person={person}/>)}
        </React.Fragment>
      );
    } else if (this.state.showFilms) {
      return (
        <React.Fragment>
           <a onClick={this.homeClicked}>
            <img src={logo} class="mx-5 my-5" />
          </a>
          <Timeline filmsArray={this.state.filmsArray} />
        </React.Fragment>
      );
    } else {
      return (
        <Fragment>
          <a onClick={this.homeClicked}>
            <img src={logo} class="mx-5 my-5" />
          </a>
          <div className="row">
            <button
              className="btn btn-primary mx-4"
              onClick={() => this.showFilmClicked()}
            >
              Show Films
            </button>
            <button
              className="btn btn-primary mx-4"
              onClick={() => this.showPeopleClicked()}
            >
              Show People
            </button>
          </div>
        </Fragment>
      );
    }
  }
}

export default App;

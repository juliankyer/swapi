import React, { Component } from 'react';
import './PersonCard.css';
import classNames from 'classnames';


class PersonCard extends Component {
  constructor(props) {
    super();
    this.state = {
      homeworld: {},
      species: {},
      favorited: false
    }
  };

  componentDidMount() {
    fetch(this.props.peopleInfo.homeworld)
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({ homeworld: json})
    });

    fetch(this.props.peopleInfo.species)
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({ species: json})
    });
  };

  toggleFavorite() {
    this.setState({ favorited: !this.state.favorited })
  }

  render() {
    const identifiers = classNames({
      'people-card': this.state,
      'fav-flag': this.state.favorited,
      'unfav-flag': !this.state.favorited
    });
    return (
      <div className={identifiers}>
        <p className="person-name">{ this.props.peopleInfo.name }</p>
        <p className="person-world">From: { this.state.homeworld.name }</p>
        <p className="person-pop">Population: { this.state.homeworld.population }</p>
        <p className="person-species">Species: { this.state.species.name }</p>
        <button className="fav"
                onClick={ () => this.toggleFavorite() }>
        </button>
      </div>
    )
  };
};

PersonCard.propTypes = {
  homeworld: React.PropTypes.object,
  species: React.PropTypes.object,
  favorited: React.PropTypes.bool
};

export default PersonCard;

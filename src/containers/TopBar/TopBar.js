import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./TopBar.css";
import axios from "../../axios-instances/axiosGeocode";

class topBar extends Component {
  state = {
    suggestions: [],
    boxVisible: false,
    place: {},
  };

  searchingHandler = (event) => {
    const s = event.target.value;

    if (s.length >= 3) {
      axios.get(`${s}.json`).then((response) => {
        this.setState({
          suggestions: response.data.features.map((feature) => {
            return {
              id: feature.id,
              place_name: feature.place_name,
              text: feature.text,
              coordinates: feature.geometry.coordinates,
            };
          }),
          boxVisible: true,
        });
      });
    }

    if (!s) {
      this.setState({
        suggestions: [],
        boxVisible: false,
      });
    }
  };

  clickHandler = (place) => {
    this.props.placeSetter(place);
    this.setState({ place: place, boxVisible: false, suggestions: [] });
  };

  render() {
    let searchSuggestions = null;

    if (this.state.boxVisible) {
      searchSuggestions = this.state.suggestions.map((s) => (
        <div
          id={s.id}
          className={classes.suggestion}
          onClick={() => this.clickHandler(s)}
        >
          <p>{s.place_name}</p>
        </div>
      ));
    } else searchSuggestions = null;

    return (
      <Aux>
        <div className={classes.Bar}>
          <input
            className={classes.Box}
            onChange={this.searchingHandler}
            type="text"
            placeholder="Search for city..."
          />
        </div>
        <div
          className={this.state.boxVisible ? classes.SearchSuggestions : null}
        >
          {searchSuggestions}
        </div>
      </Aux>
    );
  }
}

export default topBar;

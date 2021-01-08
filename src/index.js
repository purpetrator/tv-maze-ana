import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";
import ResultCard from "./components/ResultCard/index";
import Nav from "./components/Nav/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");

  const handleApiCall = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=" + query
    );
    setShows(response.data);
  };

  return (
    <div>
      <Nav />
      <div className="mainDiv">
        <form
          className="searchBar"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleApiCall();
          }}
        >
          <div className="inputField">
            <button className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search TV Show here"
            />
          </div>
          <button type="button" className="btn" id="searchBtn">
            Search
          </button>
        </form>

        <div className="shows">
          {shows.map((show, index) => {
            return (
              <div
                className="cardsDiv"
                id={`${index} ${show.show.name}`}
                key={`${index} ${show.show.name}`}
              >
                {show.show.image && show.show.summary ? (
                  <ResultCard
                    name={show.show.name}
                    summary={show.show.summary}
                    image={show.show.image.medium}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

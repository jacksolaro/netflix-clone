import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;

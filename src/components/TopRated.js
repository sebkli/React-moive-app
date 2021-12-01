import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const TopRated = () => {
  const [moviesTopRated, setmTopRated] = useState([]);

  const getMovieData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0d56c19aea29ea2e4298b121a9b5cf15&language=en-US&page=1";

    const response = await fetch(url);
    const responseJson = await response.json();

    setmTopRated(responseJson.results);
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      {moviesTopRated.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default TopRated;

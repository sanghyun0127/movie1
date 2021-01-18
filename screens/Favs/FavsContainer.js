import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";
import FavsPresenter from "./FavsPresenter";

export default () => {
  const [movies, setMovies] = useState({
    //FavsPresenter 에서 results 로 받았음
    results: [],
    resultsError: null,
  });
  const getData = async () => {
    const [results, resultsError] = await movieApi.discover();
    // rendering
    setMovies({
      results,
      resultsError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <FavsPresenter {...movies} />;
};

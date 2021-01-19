import React, { useState, useEffect } from "react";
import FavsPresenter from "./FavsPresenter";
import { movieApi } from "../../api";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    //FavsContainer에서 result로 받음
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavsPresenter {...movies} />;
};

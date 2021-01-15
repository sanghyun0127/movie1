import React from "react";
import { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  //useState를 이렇게 만들면 뒤에 setMoives로 rendering을 한 번만 할 수 있음
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    // rendering
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter refreshFn={getData} {...movies} />;
};

import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  // 초기값은 빈 텍스트 => setKeyword로 텍스트 갱신
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  // searchs는 async가 붙어야함 => await 따라옴
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      moviesError,
      showsError,
    });
  };
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};

import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes,
      /*youtube에서 불러오는 것들 로딩이 다 안되면 에러가 뜸 
      => loading 후에 불러오도록 해주자 */
      videos: {
        results: [],
      },
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        // movie = title , tv = name
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};

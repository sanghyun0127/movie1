import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { tvApi } from "../api";

export default () => {
  //useState를 이렇게 만들면 뒤에 setTv로 rendering을 한 번만 할 수 있음
  const [shows, setShows] = useState({
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    // rendering
    setShows({
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{shows.today?.length}</Text>
    </View>
  );
};

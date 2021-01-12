import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { movieApi, tvApi } from "../api";

export default () => {
  const [movies, setMovies] = useState({
    discover: [],
    discoverError: null,
  });
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    // rendering
    setMovies({
      discover,
      discoverError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.discover?.length}</Text>
    </View>
  );
};

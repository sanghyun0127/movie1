import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
`;

const ReleaseDate = styled.Text`
  color: white;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
`;

const Overview = styled.Text`
  color: white;
  margin-top: 10px;
`;

const Horizontal = ({
  isTv = false,
  id,
  title,
  poster,
  overview,
  releaseDate,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      // Detail에다가 여기서 들어오는 props 를 보낼 수 있음
      id,
      title,
      poster,
      overview,
      releaseDate,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 15)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
          ) : null}
          <Overview>{trimText(overview, 100)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
  /*Tv에는 release_date가 없기 때문에 isRequired가 아니라 그냥 옵션으로 넣는다.
  위에서는 if releaseDate ~~ 어쩌구 형식으로 넣어주기
  */
  releaseDate: PropTypes.string,
};

export default Horizontal;

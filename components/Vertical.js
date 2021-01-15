import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import { trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ isTv = false, id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDeatil = () => {
    navigation.navigate("Detail", {
      isTv,
      // Detail에다가 여기서 들어오는 props 를 보낼 수 있음
      id,
      title,
      //poster,
      votes,
    });
  };
  return (
    <TouchableOpacity onPress={goToDeatil}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;

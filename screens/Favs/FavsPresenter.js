import React from "react";
//panResponder : 사용자가 화면을 누르거나 드래그 하는 등의 제스처를 인식
import { PanResponder, Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

//Card가 이어붙어있지 않고 한 화면마다 각각의 위치에 있게 하기 = position : absolute
const Card = styled.View`
  top: 80px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    //dx, dy = x축, y축으로 이동한 거리
    onPanResponderMove: (e, { dx }) => {
      console.log({ dx });
    },
  });
  return (
    <Container>
      {
        //poster 불러오면 마지막 영화의 Card가 맨 처음에 나옴 => reverse()해서 순서 바꿔주기
        results.reverse().map((result) => (
          <Card key={result.id} {...panResponder.panHandlers}>
            <Poster source={{ uri: apiImage(result.poster_path) }} />
          </Card>
        ))
      }
    </Container>
  );
};

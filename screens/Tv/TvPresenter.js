import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

/*
이번 버전의 버그였던 것 같은데 혹시 WEB에서만 안뜬다면 Fragment: <> 문제일 것
그래서 <> => <Container> 로 바꿔주기 
*/

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ refreshFn, loading, popular, topRated, today }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title="Popular TV Shows">
        {popular.map((show) => (
          <Vertical
            // DeatilContainer에서 isTv={true} 면 TV정보, 아니면 Movie 정보 내보내기
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            //original_title로 가져오면 해당 언어 그대로 옴 => title로 변경
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            //original_title로 가져오면 해당 언어 그대로 옴 => title로 변경
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Today">
        {today.map((show) => (
          <Horizontal
            isTv={true}
            id={show.id}
            key={show.id}
            title={show.name}
            poster={show.poster_path}
            //original_title로 가져오면 해당 언어 그대로 옴 => title로 변경
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);

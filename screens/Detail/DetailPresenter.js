import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { apiImage } from "../../api";
import { ActivityIndicator, Dimensions } from "react-native";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Link from "../../components/Detail/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 20px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
`;

const DataValue = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

// DetailContainer에서 detail의 useState의 result
export default ({ openBrowser, result, loading }) => (
  <ScrollContainer
    loading={false}
    contentContainerStyle={{ paddingBottom: 80 }}
  >
    <>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview ? (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        ) : /* result.overview가 false 이면 {""} 을 return 하는데 """ 는 string이므로 
        "Text strings must be rendered with in a <Text> component" 에러 발생
        => 에러나면 null을 return하게 해서 해결해보자
        */ null}

        {loading ? (
          <ActivityIndicator style={{ marinTop: 30 }} color={"white"} />
        ) : null}

        {result.spoken_languages ? (
          <>
            <DataName>Languages</DataName>
            <DataValue>
              {result.spoken_languages.map((l) => `${l.name} `)}
            </DataValue>
          </>
        ) : null}

        {result.release_date ? (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        ) : null}

        {result.status ? (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        ) : null}

        {result.runtime ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} min</DataValue>
          </>
        ) : null}

        {result.first_air_date ? (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{result.first_air_date}</DataValue>
          </>
        ) : null}

        {result.genres ? (
          <>
            <DataName>Genres</DataName>
            <DataValue>{`${result.genres.map((g) => g.name)}`}</DataValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </DataValue>
          </>
        ) : null}

        {result.imdb_id ? (
          <Link
            text={"IMDB Page"}
            icon={"imdb"}
            onPress={() =>
              openBrowser(`https://imdb.com/title/${result.imdb_id}`)
            }
          />
        ) : null}

        {result.videos.results?.length > 0 ? (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
      </Data>
    </>
  </ScrollContainer>
);

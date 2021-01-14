import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text`
  color: white;
`;

export default () => (
  <Container>
    <Input placeholder={"Write a keyword"} />
  </Container>
);

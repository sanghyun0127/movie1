import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextInput = styled.TextInput`
  background-color: white;
`;

/*
onChange: keyboard로 뭔가를 적으면 실행 
onSubmit: keyboard에서 search를 누르면 실행 

-----------------------------------------------
<React Native - TextInput에서 많은 props 볼 수 있음>
returnKeyType: 확인버튼 글자 고르기
onChangeText: input이 하나의 string argument로 넘어감 ** 그냥 onChange 도 있음
onSubmitEditing

*/
const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    onplaceholder={placeholder}
    returnKeyType={"search"}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;

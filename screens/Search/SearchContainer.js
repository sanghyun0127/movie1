import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

export default () => {
  // 초기값은 빈 텍스트 => setKeyword로 텍스트 갱신
  const [keyword, setKeyword] = useState("");
  const onChange = (text) => setKeyword(text);
  return <SearchPresenter />;
};

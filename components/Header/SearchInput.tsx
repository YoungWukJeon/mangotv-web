import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { GLOBAL_COLOR } from '../../static/styles/global-styles';

function SearchInput() {
  const [text, setText] = useState("");

  const onChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  return <Input type="text" placeholder="검색" value={text} onChange={onChangeText}/>;
}

export default SearchInput;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid ${GLOBAL_COLOR.mainColor};
  border-radius: 5px;
  padding: 5px 10px;
`;

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TITLE_REQUEST } from '../reducers/test';

const Home = () => {
  const test = useSelector(store => store.test);
  const dispatch = useDispatch();

  const onClickTitle = useCallback(() => {
    dispatch({
      type: CHANGE_TITLE_REQUEST,
      title: '망고 TV',
      changed: true
    })
  }, [])
  return (
    <>
      <h1>Hello, {test.title}</h1>
      {!test.changed && <button onClick={onClickTitle}>Change Title</button>}
    </>
  )
}

export default Home;
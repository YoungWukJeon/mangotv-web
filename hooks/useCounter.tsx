import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { increase, decrease, increaseBy } from '../modules/counter';

export default function useCounter() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, []);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, []);

  const onIncreaseBy = useCallback(
    (diff: number) => () => {
      dispatch(increaseBy(diff));
    },
    [],
  );

  return { count, onIncrease, onDecrease, onIncreaseBy };
}

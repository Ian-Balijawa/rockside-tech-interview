import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from '../../app/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useState } from 'react';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <Button
          text="-"
          onClick={() => dispatch(decrement())}
          aria-label="Decrement value"
        />
        <span>{count}</span>
        <Button
          text="+"
          onClick={() => dispatch(increment())}
          aria-label="Increment value"
        />
      </div>
      <div >
        <Input
          value={incrementAmount}
          onChange={( e ) => setIncrementAmount( e.target.value )}
          aria-label="Set increment amount" name={''}
          />
         <Button
          text="Add Amount"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          aria-label="Increment value"
        />
        <Button
          text="Add Async"
          onClick={() => dispatch(incrementAsync(incrementValue))}
          aria-label="Increment value"
        />
        <Button
          text="Add If Odd"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
          aria-label="Increment value"
        />
      </div>
    </div>
  );
}

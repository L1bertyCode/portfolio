import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {}

export const Counter = (props: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const {} = props;
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const deccrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        variant="outline"
        onClick={increment}
      >
        +
      </Button>
      <Button
        data-testid="deccrement-btn"
        variant="outline"
        onClick={deccrement}
      >
        -
      </Button>
    </div>
  );
};

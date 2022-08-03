import { useContext } from "react";
import MyContext from "../../context/myContext";
import style from "./Counter.module.scss";

export default function Counter() {
  const { finalValue } = useContext(MyContext);
  const numbers = finalValue.toString().split("")

  return (
    <>
      <span className={style.counter}>
        {numbers[numbers.length - 5] ? numbers[numbers.length - 5] : 0}
      </span>
      <span className={style.counter}>
        {numbers[numbers.length - 4] ? numbers[numbers.length - 4] : 0}
      </span>
      <span className={style.counter}>
        {numbers[numbers.length - 3] ? numbers[numbers.length - 3] : 0}
      </span>
      <span className={style.counter}>
        {numbers[numbers.length - 2] ? numbers[numbers.length - 2] : 0}
      </span>
      <span className={style.counter}>
        {numbers[numbers.length - 1] ? numbers[numbers.length - 1] : 0}
      </span>
    </>
  );
}

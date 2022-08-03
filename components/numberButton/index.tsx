import { useContext } from "react";
import MyContext from "../../context/myContext";
import style from "./NumberButton.module.scss"

export default function NumberButton() {
  const { setSumValue } = useContext(MyContext);
  const defaultValues = [100, 350, 700]

  const handleClick = event => {
    setSumValue(event.target.value)
  }

  return (
    <>
      {defaultValues.map(value => {
        return <button value={value} onClick={handleClick} key={value} className={style.numberButton}>{value}</button>
      })}
    </>
  );
}
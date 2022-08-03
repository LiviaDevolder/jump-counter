import { useContext } from "react";
import MyContext from "../../context/myContext";
import style from "./AddButton.module.scss"

export default function AddButton() {
  const { sumValue, setSumValue, finalValue, setFinalValue } = useContext(MyContext);

  const handleClick = () => {
    if (Number(finalValue) + Number(sumValue) > 99999) {
      setFinalValue(99999)
      alert("Parabéns! Você atingiu o limite de 99999 pulos.");
    } else {
      setFinalValue(Number(finalValue) + Number(sumValue))
      setSumValue(0)
    }
  }

  return (
    <>
      <button onClick={handleClick} className={style.addButton}>Add</button>
    </>
  )
}
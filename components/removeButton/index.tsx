import { useContext } from "react";
import MyContext from "../../context/myContext";
import style from "./RemoveButton.module.scss";

export default function RemoveButton() {
  const { sumValue, finalValue, setFinalValue } = useContext(MyContext);

  const handleClick = () => {
    if (finalValue - sumValue < 0) {
      alert("Insira um valor menor ou igual ao número de pulos atual")
    } else {
      setFinalValue(finalValue - sumValue)
    }
  };

  return (
    <>
      <button onClick={handleClick} className={style.removeButton}>
        Remove
      </button>
    </>
  );
}

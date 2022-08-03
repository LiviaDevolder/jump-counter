import { useContext } from "react";
import MyContext from "../../context/myContext";
import style from "./RemoveButton.module.scss";

export default function RemoveButton() {
  const { sumValue, setSumValue, finalValue, setFinalValue } = useContext(MyContext);

  const handleClick = () => {
    if (Number(finalValue) - Number(sumValue) < 0) {
      alert("Insira um valor menor ou igual ao número de pulos atual")
    } else {
      setFinalValue(Number(finalValue) - Number(sumValue))
      setSumValue(0);
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

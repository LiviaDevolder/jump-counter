import style from "./NumberButton.module.scss"

export default function NumberButton() {
  return (
    <>
      <button className={style.numberButton}>100</button>
      <button className={style.numberButton}>350</button>
      <button className={style.numberButton}>700</button>
    </>
  );
}
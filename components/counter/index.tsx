import style from "./Counter.module.scss";

export default function Counter() {
  return (
    <>
      <span className={style.counter}>0</span>
      <span className={style.counter}>0</span>
      <span className={style.counter}>0</span>
      <span className={style.counter}>0</span>
      <span className={style.counter}>0</span>
    </>
  );
}

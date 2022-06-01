import style from './Container.module.scss'
import Counter from '../counter/index'
import NumberButton from '../numberButton/index'
import InputText from '../inputText/index';
import AddButton from '../addButton/index';
import RemoveButton from '../removeButton/index';

export default function Container() {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Counter></Counter>
      </div>
      <div className={style.subContainer}>
        <NumberButton></NumberButton>
      </div>
      <div className={style.subContainer}>
        <InputText />
      </div>
      <div className={style.subContainer}>
        <RemoveButton />
        <AddButton />
      </div>
    </div>
  );
}
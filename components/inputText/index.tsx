import style from "./InputText.module.scss"
import React, { useContext } from 'react'
import MyContext from "../../context/myContext"

export default function InputText() {
  const { sumValue, setSumValue } = useContext(MyContext)

  const handleChange = event => {
    setSumValue(event.target.value)
  }

  return (
    <input value={sumValue} onChange={handleChange} type="number" className={style.inputText} />
  )
}
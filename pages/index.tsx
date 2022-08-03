import Head from "../node_modules/next/head";
import Container from "../components/container/index";
import MyContext from "../context/myContext";
import { useState } from "react";

export default function Home() {
  const [sumValue, setSumValue] = useState(0)
  const [finalValue, setFinalValue] = useState(0)

  return (
    <MyContext.Provider value={{sumValue, setSumValue, finalValue, setFinalValue}}>
      <Head>
        <title>Jump Counter</title>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
      </Head>
      <h1>JUMP COUNTER</h1>
      <Container />
    </MyContext.Provider>
  );
}
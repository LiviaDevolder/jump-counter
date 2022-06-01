import Head from "../node_modules/next/head";
import Container from "../components/container/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jump Counter</title>
        <link rel="shortcut icon" href="/src/public/images/favicon.ico" />
      </Head>
      <h1>JUMP COUNTER</h1>
      <Container></Container>
    </>
  );
}
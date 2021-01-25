import React from 'react'
import Head from 'next/head'
import BorboletaLogo from '../assets/Borboleta.png';
import { Container } from '../styles/stylesPages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
    <img src={BorboletaLogo} alt="" />
        <h1>Boboleta </h1>
        <p>Efeito boboleta</p>

    </Container>
  )
}
export default Home;

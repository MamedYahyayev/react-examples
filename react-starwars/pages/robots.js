import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toys from "../components/Toys";

const robots = () => {
  return (
    <div>
      <Head>
        <title>Robots</title>
      </Head>

      <Header />

      <Toys size="10" />

      <Footer />
    </div>
  );
};

export default robots;

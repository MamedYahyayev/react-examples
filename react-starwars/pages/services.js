import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

const services = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>

      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default services;

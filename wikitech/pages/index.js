import HeroSection from "../app/hero/page";
import Navbar from "../app/navbar/page";
import Banner from "../app/banner/page";
import About from "../app/about/page";
import ContactForm from "../app/contact/page";
import React from "react";
import Head from "next/head";
import TawkToChat from "../app/TwakToChat/TawkToChat";
import Footer from "../app/footer/page";


const Home = () => {
  return (
    <div>
      <Head>
        <title>Wikitech.io</title>
      </Head>
      <Navbar/>
      <HeroSection />
      <Banner />
      <About />
      <ContactForm />
      <TawkToChat />
      <Footer/>
    </div>
  );
};

export default Home;

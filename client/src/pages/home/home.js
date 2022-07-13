import React from "react";
import Header from "../../components/home/header";
import StepsList from "../../components/home/stepsList";
import Stats from "../../components/home/stats";
import SignUp from "../../components/home/signUp";
import Companies from "../../components/home/companies";
import Mentors from "../../components/home/mentors";
import Testimonials from "../../components/home/testimonials";
import Faqs from "../../components/home/faqs";
import "../../assets/styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <StepsList />
      <SignUp />
      <Companies />
      <Stats />
      <SignUp />
      <Mentors />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Home;

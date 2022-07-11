import React from "react";
import Navbar from "../components/navbar";
import HomeHeader from "../components/homeHeader";
import StepsList from "../components/stepsList";
import Stats from "../components/stats";
import SignUp from "../components/signUp";
import Companies from "../components/companies";
import Mentors from "../components/mentors";
import Testimonials from "../components/testimonials";
import "../assets/styles.css";
import { Menu, Button, Image, MenuItem, Container } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <StepsList />
      <SignUp />
      <Companies />
      <Stats />
      <SignUp />
      <Mentors />
      <Testimonials />
    </>
  );
};

export default Home;

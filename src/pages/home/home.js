import React from "react";
import Header from "../../components/home/header";
import ValueProp from "../../components/home/valueProp";
import StepsList from "../../components/home/stepsList";
import Stats from "../../components/home/stats";
import Companies from "../../components/home/companies";
import MentorsList from "../../components/home/mentorsList";
import Testimonials from "../../components/home/testimonials";
import Faqs from "../../components/home/faqs";
import BackToTopBtn from "../../components/backToTopBtn";
import "../../assets/styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <section className="valueProp-section">
        <ValueProp />
      </section>
      <section className="steps-section">
        <StepsList />
      </section>
      <section className="companies-section">
        <Companies />
      </section>
      <article className="stats-article">
        <Stats />
      </article>
      <section className="mentors-section">
        <MentorsList />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="faq-section">
        <Faqs />
      </section>
      <BackToTopBtn />
    </>
  );
};

export default Home;

import React from "react";
import "./Home.css";
//import Product from "../../Components/Product";
import DefaultPageTemplate from "../../Components/Templates/DefaultPageTemplate";
import { mediaURL } from "../../Utils/Constants";
import { setPageTitle } from "../../helpers/Constants";

const Home = () => {
  setPageTitle("Amazon Redesign");

  return (
    <DefaultPageTemplate>
      <div className="home">
        <img
          className="home__heroBanner"
          src={`${mediaURL}/homepage/hero%20section.jpg`}
          alt=""
        />
      </div>
    </DefaultPageTemplate>
  );
};

export default Home;

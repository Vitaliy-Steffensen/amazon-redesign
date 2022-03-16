import React from "react";
import "./Home.css";
import DefaultPageTemplate from "../../Components/Templates/DefaultPageTemplate";
import { mediaURL } from "../../Utils/Constants";
import { setPageTitle } from "../../helpers/Constants";
import CategoryGrid from "./components/CategoryGrid";
import HotProducts from "./components/HotProducts";
import ReviewsGrid from "./components/ReviewsGrid";

const Home = () => {
  setPageTitle("Amazon Redesign");

  return (
    <DefaultPageTemplate>
      <div className="home">
        <img
          className="home__banner"
          src={`${mediaURL}/v1646986692/media/content/hero_section.jpg`}
          alt=""
        />
        <CategoryGrid />
        <HotProducts />
        <ReviewsGrid />
      </div>
    </DefaultPageTemplate>
  );
};

export default Home;

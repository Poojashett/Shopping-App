import React from "react";
import Header from "../Header/Header";
import NewCollection from "../NewCollections/NewCollection";
import NewsLetter from "../Newsletter/NewsLetter";
import Popular from "../Popular/Popular";

const Home = ({ scrollToFooter }) => {
  const scrollToNewCollection = () => {
    const newCollectionSection = document.getElementById("new-collection-section");
    if (newCollectionSection) {
      newCollectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToNewCollection={scrollToNewCollection} scrollToFooter={scrollToFooter}/>
      <Popular />
      <NewCollection id="new-collection-section" />
      <NewsLetter />
    </div>
  );
};

export default Home;

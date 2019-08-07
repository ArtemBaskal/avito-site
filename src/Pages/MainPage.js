import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import FavoritesList from "../components/FavoritesList";
import "../styles/MainPage.css";

const MainPage = () => (
  <div className="main-page">
    <Header />
    <ProductsList />
    <FavoritesList isSmall />
  </div>
);

export default MainPage;

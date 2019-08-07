import React from "react";
import Header from "../components/Header";
import FavoritesList from "../components/FavoritesList";
import "../styles/FavoritesPage.css";

const FavoritesPage = () => (
  <div className="favorites-page">
    <Header />
    <FavoritesList />
  </div>
);

export default FavoritesPage;

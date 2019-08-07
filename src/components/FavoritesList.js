import React from "react";
import Product from "./Product";

const FavoritesList = ({ isSmall }) => {
  //localStorage хранит файлы в случайном порядке, сортируем их по дате добавления - новые сверху
  let sortedParsedList;
  try {
    sortedParsedList = Object.values(localStorage)
      .map(adv => {
        return JSON.parse(adv);
      })
      .sort((adv1, adv2) => adv1.timestamp - adv2.timestamp);
  } catch (e) {
    alert(
      "Ошибка! Неверный формат элемента (нестроковый тип) в localStorage. Оно будет очищено."
    );
    console.log(e);
    localStorage.clear();
    sortedParsedList = [];
  }
  //TODO: отдельный компоненты для избранного продукта

  return (
    <div>
      {!!sortedParsedList.length && (
        <h3 className="favorites-title">Избранное</h3>
      )}
      {sortedParsedList.map(
        ({ id, title, pictures, price, sellerName, sellerRating }) => (
          <Product
            id={id}
            key={id}
            title={title}
            price={price}
            pictures={pictures}
            sellerName={sellerName}
            sellerRating={sellerRating}
            isFavorite
            isSmall={isSmall}
          />
        )
      )}
    </div>
  );
};

export default FavoritesList;

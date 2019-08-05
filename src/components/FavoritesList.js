import React from "react";
import Product from "./Product";

export default function FavoritesList() {
  //localStorage хранит файлы в случайном порядке, сортируем их по дате добавления - новые сверху
  let sortedParsedList;
  try {
    sortedParsedList = Object.values(localStorage)
      .map(adv => {
        return JSON.parse(adv);
      })
      .sort((adv1, adv2) => adv2.date - adv1.date);
  } catch (e) {
    alert(
      "Ошибка! Неверный формат элемента (нестроковый тип) в localStorage. Оно будет очищено."
    );
    console.log(e);
    localStorage.clear();
    sortedParsedList = [];
  }
  console.log(sortedParsedList);
  //TODO: отдельный компоненты для избранного продукта
  return (
    <div>
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
          />
        )
      )}
    </div>
  );
}

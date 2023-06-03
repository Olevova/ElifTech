import { ShopingList } from "../components/ShopingList/ShopingList";
import React, { useState, useEffect } from "react";
import { DishList } from "../components/DishList/DishList";
import { HomeContainer } from "./HomeContainer.styled";
import { getRestAndDish } from "../helper/fetch";

export const HomePage = ({ setMyCardItem }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [shopsData, setshopsData] = useState([]);
  const [dataRecipt, setDataRecipt] = useState([]);
  const [startDataRecipt, setStartDataRecipt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [myCardItem, setMyCardItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestAndDish();
        setStartDataRecipt(data.dish);
        setshopsData(data.rest);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(startDataRecipt, "startDataRecipt");

  useEffect(() => {
    if (!selectedId) {
      setDataRecipt(startDataRecipt);
      return;
    }
    const Recipt = startDataRecipt.filter(
      (item) => item.restaurant_id === selectedId
    );
    console.log(Recipt, "Recipt");
    setDataRecipt(Recipt);
  }, [selectedId, startDataRecipt]);

  const handleCardClick = (id) => {
    setSelectedId(id);
    console.log(id, "id", "click");
  };

  const handleAddClick = (item) => {
    setMyCardItem((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItemIndex = updatedItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].count += 1;
      } else {
        updatedItems.push({ ...item, count: 1 });
      }

      return updatedItems;
    });
  };

  return (
    <HomeContainer>
      <ShopingList shopsData={shopsData} onCardClick={handleCardClick} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DishList
          onAddClick={handleAddClick}
          dishes={!dataRecipt ? startDataRecipt : dataRecipt}
        />
      )}
    </HomeContainer>
  );
};

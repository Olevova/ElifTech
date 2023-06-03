import { ShopCard } from "../Shop/ShopCard";
import { ShopinListDiv } from "../ShopingList/ShopingList.styled";
import { useState } from "react";

export const ShopingList = ({ shopsData, onCardClick }) => {
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(id);
    onCardClick(id);
  };

  return (
    <>
      <ShopinListDiv>
        <div className="containerForShop">
          <h2 style={{ margin: "10px", color: "red" }}>shops</h2>
          {shopsData.map(({ id, name }) => (
            <ShopCard
              key={id}
              name={name}
              id={id}
              activeId={activeId}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </ShopinListDiv>
    </>
  );
};

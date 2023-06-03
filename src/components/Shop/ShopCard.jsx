import { Shopdiv } from "./ShopCard.styled";
// import { useState } from "react";

export const ShopCard = ({ id, name, activeId, onClick }) => {
  // const [activeId, setActiveId] = useState(null);

  const handleClick = () => {
    console.log("click on button");
    onClick(id);
  };

  // const isActive = activeId === id;

  return (
    <Shopdiv onClick={handleClick} className={activeId === id ? "active" : ""}>
      <p>{name}</p>
    </Shopdiv>
  );
};

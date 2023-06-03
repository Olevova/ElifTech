import { Dish } from "../Dish/Dish";
import { DishDiv } from "./DishList.styled";

export const DishList = ({ dishes, onAddClick }) => {
  console.log(dishes, "dishes");
  const haveItem = (item) => {
    onAddClick(item);
  };
  return (
    <>
      <DishDiv>
        {dishes.map((dishes) => (
          <Dish key={dishes.id} item={dishes} onclickAad={haveItem} />
        ))}
      </DishDiv>
    </>
  );
};

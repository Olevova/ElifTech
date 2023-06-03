import { OrderCard } from "../Order/OrderCard";
// import { OrderDiv } from "../OrderList/OrderList.styled";
export const OrderList = ({ myCardItem, onOrderItemChange }) => {
  console.log(myCardItem);
  return (
    <div>
      {myCardItem.map((item) => (
        <OrderCard
          key={item.id}
          item={item}
          onOrderItemChange={onOrderItemChange}
        />
      ))}
    </div>
  );
};

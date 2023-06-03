import { Ordercard } from "./OrderCard.styled";
import { useState } from "react";

export const OrderCard = ({ item, onOrderItemChange }) => {
  const [myorder, setMyorder] = useState(item);
  const { count, photo, price, name } = myorder;

  const creatImg = (imgData) => {
    const uint8Array = new Uint8Array(imgData.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    const imageURL = URL.createObjectURL(blob);
    return imageURL;
  };

  const handleIncrease = () => {
    setMyorder((prevOrder) => {
      const updatedOrder = { ...prevOrder, count: prevOrder.count + 1 };
      onOrderItemChange(updatedOrder);
      return updatedOrder;
    });
  };

  const handleDecrease = () => {
    if (count > 0) {
      setMyorder((prevOrder) => {
        const updatedOrder = { ...prevOrder, count: prevOrder.count - 1 };
        onOrderItemChange(updatedOrder);
        return updatedOrder;
      });
    }
  };

  const totalPrice = price * count;

  return (
    <Ordercard>
      <div className="card">
        <div className="img">
          <img src={creatImg(photo)} alt={name} width={150} height={150} />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <p>{`Price ${totalPrice}`}</p>
        </div>
        <div className="form">
          <label htmlFor="value">Value:</label>
          <input
            type="number"
            id="value"
            min="0"
            max="100"
            value={count}
            onChange={(e) => setMyorder({ ...myorder, count: e.target.value })}
          />
          <button id="increase" onClick={handleIncrease}>
            ▲
          </button>
          <button id="decrease" onClick={handleDecrease}>
            ▼
          </button>
          <output id="output"></output>
        </div>
      </div>
    </Ordercard>
  );
};

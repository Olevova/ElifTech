import { useState, useEffect } from "react";
import { Form } from "../components/Form/Form";
import { OrderList } from "../components/OrderList/OrderList";
import { HomeContainer } from "./HomeContainer.styled";
import { useLocation } from "react-router-dom";
// import { sendEmail } from "../helper/fetch";
// import dotenv from "dotenv";
// dotenv.config();

export const ShopingCard = ({ myCardItem }) => {
  const location = useLocation();
  console.log(location);
  const [person, setPerson] = useState(null);
  const [myOrderItems, setMyOrderItems] = useState(myCardItem);

  const sendAll = (person) => {
    setPerson(person);
  };

  const sendEmail = (object) => {
    const subject = "Order";
    const body = JSON.stringify(object);
    const mailToLink = `mailto:vovatest50@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;
  };

  const sendMailWithOrder = () => {
    if (person !== null) {
      const obj = { person: person, order: myOrderItems };
      console.log(obj);
      sendEmail(obj);
      setPerson(null);
      setMyOrderItems(null);
    }
  };
  useEffect(() => {
    sendMailWithOrder();
  }, [person]);

  // useEffect(() => {
  //   // console.log(person, "its her");
  //   console.log(myOrderItems, "it");
  //   const obj = JSON.stringify({ person: person, order: myOrderItems });
  //   sendEmail(obj);
  //   // setPerson(null);
  //   // setMyOrderItems(null);
  // }, [myOrderItems]);

  const handleOrderItemChange = (updatedItem) => {
    setMyOrderItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      });
      return updatedItems;
    });
  };

  const totalCount = (order) => {
    const total = order.reduce(
      (totalSum, item) => totalSum + item.count * item.price,
      0
    );
    return total;
  };
  const totall = totalCount(myOrderItems);
  return (
    <HomeContainer>
      <Form total={totall} onFormSubmit={sendAll} />
      <OrderList
        myCardItem={myOrderItems}
        onOrderItemChange={handleOrderItemChange}
      />
    </HomeContainer>
  );
};

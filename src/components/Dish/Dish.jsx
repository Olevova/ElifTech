import { Dishcard } from "./Dish.styled";

export const Dish = ({ item, onclickAad }) => {
  const { price, photo, name } = item;
  // console.log(photo);
  const creatImg = (imgData) => {
    const uint8Array = new Uint8Array(imgData.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    const imageURL = URL.createObjectURL(blob);
    return imageURL;
  };
  const handle = () => {
    onclickAad(item);
  };
  return (
    <Dishcard>
      <img src={creatImg(photo)} alt={name} width={350} height={350} />
      <button className="overlay_btn" onClick={handle}>
        ADD CARD
      </button>
      <div className="overlay">
        <h2 className="title">
          {name}:{price}uah
        </h2>
      </div>
    </Dishcard>
  );
};

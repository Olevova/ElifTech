import { useState } from "react";
import { LabelEl } from "./Form.styled";

export const Form = ({ onFormSubmit, total }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
    setEmail("");
    setAddress("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { name, email, number, address };
    console.log(person);
    onFormSubmit(person);
    reset();
  };

  const handleName = (ev) => {
    switch (ev.currentTarget.name) {
      case "name":
        setName(ev.currentTarget.value);
        break;
      case "email":
        setEmail(ev.currentTarget.value);
        break;
      case "number":
        setNumber(ev.currentTarget.value);
        break;
      case "address":
        setAddress(ev.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <LabelEl>
      <div className="formcontainer">
        <p style={{ color: "red" }}>{total} : Total </p>
        <form onSubmit={handleSubmit}>
          <label className="lablediv">
            Name
            <input type="text" name="name" value={name} onChange={handleName} />
          </label>
          <label className="lable">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleName}
            />
          </label>
          <label className="lable">
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleName}
            />
          </label>
          <label className="lable">
            Address
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleName}
            />
          </label>
          <button type="submit" className="form_button">
            Submit
          </button>
        </form>
      </div>
    </LabelEl>
  );
};

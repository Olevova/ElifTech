import styled from "styled-components";

export const LabelEl = styled.div`
  /* top: 100px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: antiquewhite; */
  height: 100vh;
  width: 400px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
  }

  label {
    display: flex;
    padding: 50px;
    align-content: space-between;
    width: 300px;
    justify-content: space-between;
    color: red;
    & input {
      border-radius: 5px;
      width: 200px;
      background-color: #fdfdfd;
    }
  }

  .form_button {
    width: 150px;
    border-radius: 15px;
    border: 1px solid red;
    background-color: inherit;
    margin: auto;
    cursor: pointer;
    color: red;
  }

  .formcontainer {
    position: fixed;
    top: 100px;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100vh;
    background-color: #022e2e;
    align-items: center;
  }
`;

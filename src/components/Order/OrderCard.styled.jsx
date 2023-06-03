import styled from "styled-components";

export const Ordercard = styled.div`
  position: relative;
  width: 500px;
  border-radius: 8px;
  overflow: hidden;
  transition-duration: 2000ms;
  margin: 10px auto;
  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1440px) {
    min-width: 300px;
  }
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 10px 0;
    text-align: center;
    border: 1px solid red;
    border-radius: 4px;
  }
  .img {
    width: 250px;
    height: 160px;
    object-fit: cover;
    overflow: hidden;
  }
`;

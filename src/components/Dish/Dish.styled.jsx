import styled from "styled-components";

export const Dishcard = styled.div`
  position: relative;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 343px;
  height: 323px;
  transition-duration: 2000ms;
  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1440px) {
    min-width: 300px;
  }
  .remark {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 60px;
    height: 30px;
    background-color: rgb(139, 170, 54);
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 343px;
    height: 323px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 336px;
    }
    @media (min-width: 1440px) {
      max-width: 100%;
    }
  }

  &:hover {
    opacity: 1;
    scale: 1.03;
    transition-duration: 2000ms;
  }

  .overlay {
    position: absolute;
    bottom: 24px;
    border-radius: 8px;
    left: 16px;
    right: 16px;
    padding: 16px;
    background-image: none;
    background-color: #022e2e;
    color: #ff4800;
    font-family: "Poppins";
    font-style: normal;
    line-height: 20px;
    opacity: 1;
    transition-duration: 2000ms;
  }

  &:hover .overlay {
    z-index: 2;
    background-image: linear-gradient(to left, #2d3023, transparent);
    /* transition: background-image 2s ease-in-out; */
  }

  .title {
    margin: 0;
    transition-duration: 2000ms;
    color: #d9450a;
  }

  &:hover .title {
    scale: 1.03;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d5d5eb;
    z-index: 1;
    opacity: 0;
    transition: opacity 500ms ease;
  }

  &:hover::after {
    opacity: 0.5;
    transition: opacity 500ms ease;
  }
  .overlay_btn {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #022e2e;
    opacity: 0.7;
    color: #d9450a;
  }

  &:hover .overlay_btn {
    opacity: 1;
    z-index: 3;
    /* background-image: linear-gradient(to left, #2d3023, transparent); */
    /* transition: background-image 2s ease-in-out; */
  }
`;

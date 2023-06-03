import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
  &.active {
    color: #e81449;
  }
`;
export const HeaderSection = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100px;
  background-color: #022e2e;
  align-items: center;
  .header_nav {
    display: flex;
    padding: 40px 100px;
    flex-direction: row;
  }
  .header_li:not(:last-child) {
    margin-right: 20px;
  }
`;

import styled from "styled-components";
import { device } from "../../styleGuide/mediaQuery";

export const PlayerInfo = styled.div`
  border: 1px solid #f1f1f1;
  color: #333;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  @media ${device.tabletMin} {
    padding: 30px;
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media ${device.tabletMax} {
    font-size: 14px;
    padding: 12px;
    img {
      width: 90px;
      height: 90px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      margin-bottom: 20px;
      text-transform: capitalize;
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PlayerImage = styled.img`
  border-radius: 50%;
`;

export const PlayerOverView = styled.ul`
  width: 100%;
  border-left: 4px solid #e05252;
  border-right: 4px solid #27ae60;
  background-color: #fff;
  list-style: none;
  border-radius: 5px;
  margin-top: 15px;
  padding: 18px;
  color: #333;
  li {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

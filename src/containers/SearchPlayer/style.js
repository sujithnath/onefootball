import styled from "styled-components";
import { device } from "../../styleGuide/mediaQuery";

export const SearchPlayerHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 3px 3px rgb(0 0 0 / 10%);
  margin-bottom: 20px;

  @media ${device.tabletMin} {
    padding: 40px;
  }
  @media ${device.tabletMax} {
    padding: 20px;
  }

  form {
    display: flex;
    width: 100%;

    @media ${device.tabletMin} {
      margin-bottom: 10px;
    }
    @media ${device.tabletMax} {
      flex-direction: column;
    }
  }

  h4 {
    font-weight: 400;
    color: #333;

    @media ${device.tabletMin} {
      font-size: 26px;
      margin-bottom: 20px;
    }

    @media ${device.tabletMax} {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  input {
    border: 1px solid #27ae60;
    border-radius: 4px;
    padding: 18px;
    box-shadow: 1px 1px 1px rgb(43 247 134 / 50%);
    min-height: 42px;
    flex-grow: 4;
    flex-shrink: 1;
    flex-basis: 0;

    @media ${device.tabletMax} {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  button {
    border: 2px solid #27ae60;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    background-color: #27ae60;
    color: #fff;
    font-weight: 500;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 40%);
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    @media ${device.tabletMin} {
      margin-left: 10px;
      min-height: 54px;
      min-width: 180px;
      padding: 9px;
    }
    @media ${device.tabletMax} {
      font-size: 14px;
      margin-bottom: 0;
      min-height: 42px;
    }
  }
`;

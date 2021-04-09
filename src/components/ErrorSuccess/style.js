import styled from "styled-components";
import { device } from "../../styleGuide/mediaQuery";

export const ErrorStyle = styled.div`
  color: #e74c3c;
  font-size: 14px;

  @media ${device.tabletMax} {
    margin-top: 10px;
  }
`;

import styled from "styled-components";
import { device } from "../../styleGuide/mediaQuery";

export const PlayerDetailsHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: ${(props) => (props.profileFound ? "2% auto 0" : "10% auto 0")};
  transition-duration: 0.2s;
  transition-timing-function: linear;

  @media ${device.desktop} {
    width: 750px;
  }
`;

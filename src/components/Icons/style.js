import styled from "styled-components";

export const FootballPath = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-left: 10px;
`;

export const Football = styled.div`
  animation-duration: ${(props) => (props.isBounceAnimation ? ".5s" : "1.2s")};
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: "bounce";

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

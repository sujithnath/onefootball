import { FootballPath, Football } from "./style";

export const FootballIcon = ({ isLoading }) => (
  <FootballPath>
    <Football isBounceAnimation={isLoading}>⚽ </Football>
  </FootballPath>
);

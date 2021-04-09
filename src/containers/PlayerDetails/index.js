import { useState } from "react";
import SearchPlayer from "../SearchPlayer";
import PlayerProfile from "../../components/PlayerProfile";
import { PlayerDetailsHolder } from "./style";

const PlayerDetails = () => {
  const [playerDetails, setPlayerDetails] = useState(null);

  const iniSetPlayer = (newPlayerDetails) => {
    setPlayerDetails(newPlayerDetails);
  };

  return (
    <PlayerDetailsHolder
      profileFound={playerDetails && !!playerDetails.profile}>
      <SearchPlayer setPlayerDetails={iniSetPlayer} />
      {playerDetails && <PlayerProfile playerDetails={playerDetails} />}
    </PlayerDetailsHolder>
  );
};

export default PlayerDetails;

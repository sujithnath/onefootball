import { PlayerImage, PlayerOverView, PlayerInfo } from "./style.js";

const PlayerProfile = ({ playerDetails }) => (
  <>
    {playerDetails && (
      <>
        {playerDetails.profile && (
          <PlayerInfo>
            <ul>
              <li>Name: {playerDetails["id"]}</li>
              <li>Age: {playerDetails.profile["age"]}</li>
              <li>Role: {playerDetails.profile["role"]}</li>
              <li>Team: {playerDetails.profile["team"]}</li>
            </ul>

            <PlayerImage
              src={playerDetails.profile.picture}
              alt='player image'
            />
          </PlayerInfo>
        )}
        {playerDetails.stats && (
          <PlayerOverView>
            <li>assists: {playerDetails.stats.assists} </li>
            <li>blocks: {playerDetails.stats.blocks} </li>
            <li>foulsConceded: {playerDetails.stats.foulsConceded} </li>
            <li>gamesPlayed: {playerDetails.stats.gamesPlayed} </li>
            <li>goals: {playerDetails.stats.goals} </li>
            <li>passingAccuracy: {playerDetails.stats.passingAccuracy} </li>
            <li>shotsOnTarget: {playerDetails.stats.shotsOnTarget} </li>
            <li>totalPasses: {playerDetails.stats.totalPasses} </li>
            <li>totalShots: {playerDetails.stats.totalShots} </li>
            <li>totalTackles: {playerDetails.stats.totalTackles} </li>
            <li>redCards: {playerDetails.stats.redCards} </li>
            <li>yellowCards: {playerDetails.stats.yellowCards} </li>
          </PlayerOverView>
        )}
      </>
    )}
  </>
);

export default PlayerProfile;

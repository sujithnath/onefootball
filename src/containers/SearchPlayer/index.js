import { useReducer, useState } from "react";
import { Error } from "../../components/ErrorSuccess";
import { FootballIcon } from "../../components/Icons";
import { defaultPlayer, playerReducer } from "./reducer";
import { fetchPlayerData, fetchPlayerProfile } from "../../services/profile";
import { SearchPlayerHolder } from "./style";

const SearchPlayer = ({ setPlayerDetails }) => {
  const [playerResult, dispatch] = useReducer(playerReducer, defaultPlayer);
  const [playerId, setPlayerId] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target && e.target.value;
    setPlayerId(value);
  };

  const isValidInput = () => {
    dispatch({
      type: "ERROR",
      errorMessage: null,
    });

    if (!playerId || !playerId.length) {
      dispatch({
        type: "ERROR",
        errorMessage: "Please enter player details",
      });

      return;
    }
    return true;
  };

  const initFetchPlayerData = async (e) => {
    try {
      e.preventDefault();

      setPlayerDetails(null);

      if (!isValidInput()) {
        return;
      }

      dispatch({
        type: "LOADING",
        loading: true,
      });

      const result = await fetchPlayerData(playerId);

      if (!result) {
        return;
      }

      if (result.active && JSON.parse(result.active)) {
        const profileResult = await fetchPlayerProfile(result["profile-id"]);
        setPlayerId("");
        setPlayerDetails({ ...profileResult, ...result });
      } else {
        setPlayerDetails(null);
        dispatch({
          type: "ERROR",
          errorMessage: "This player is not available.",
        });
      }
    } catch (err) {
      dispatch({
        type: "ERROR",
        errorMessage: (err && err.message) || "Something went wrong",
      });
    }
  };

  return (
    <SearchPlayerHolder>
      <h4>Search Player</h4>

      <form onSubmit={initFetchPlayerData}>
        <input
          placeholder='Type player ID to fetch player details'
          onChange={onChangeHandler}
          value={playerId}
          data-testid='searchInput'
        />

        <button data-testid='searchAction'>
          {playerResult.searchButtonText}
          <FootballIcon isLoading={playerResult.loading} />
        </button>
      </form>

      <Error errorMessage={playerResult.errorMessage} />
    </SearchPlayerHolder>
  );
};

export default SearchPlayer;

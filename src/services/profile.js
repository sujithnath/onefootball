import { getRequest } from ".";
import { BASE_API_URL } from "../utils/constants";

export const fetchPlayerData = async (playerId) => {
  if (!playerId) {
    throw new Error("Player ID is missing");
  }

  try {
    const URL = `${BASE_API_URL}/assignments/player/data/${playerId}.json`;
    const result = await getRequest(URL);
    return result.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        throw new Error("This player is not available.");
      }
    } else {
      throw new Error(error);
    }
  }
};

export const fetchPlayerProfile = async (profileId) => {
  if (!profileId) {
    throw new Error("Profile ID is missing");
  }

  try {
    const result = await getRequest(
      `${BASE_API_URL}/assignments/player/profile/${profileId}`,
    );

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

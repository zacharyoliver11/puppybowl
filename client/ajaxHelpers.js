// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2206-FTB-PT-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const resp = await fetch(`${APIURL}/players`);
    const result = await resp.json();
    return result.data.players;
  } catch (e) {
    console.log("Error, trouble fetching players!", e);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const resp = await fetch(`${APIURL}/players/${playerId}`);
    const result = await resp.json();
    return result.data.player;
  } catch (e) {
    console.log("Error", e);
  }
};

export const addNewPlayer = async (playerObj) => {};

export const removePlayer = async (playerId) => {};

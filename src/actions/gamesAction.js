import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

//Action creator

export const loadGames = () => async dispatch => {
  //FETCH AXIOS
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

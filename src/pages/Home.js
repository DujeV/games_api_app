import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get the data back - extract data
  const { popularGames, upcomingGames, newGames } = useSelector(
    state => state.games
  );

  return (
    <GameList className='App'>
      {pathId && <GameDetail />}
      <h2>Upcoming games</h2>
      <Games>
        {upcomingGames.map(game => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <Games>
        {popularGames.map(game => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <Games>
        {newGames.map(game => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

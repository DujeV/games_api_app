import React from 'react';
import { useHistory } from 'react-router-dom';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { smallImage } from '../util';
//Redux
import { useSelector } from 'react-redux';
//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = () => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHander = e => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  //GET PLATFORM IMAGES
  const getPlatform = platform => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt='star' key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //Data
  const { screenshot, game, isLoading } = useSelector(state => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHander}>
          <Detail>
            <Stats>
              <div>
                <h1>{game.name}</h1>
                <p>Rating: {game.rating}</p>
                {getStars()}
                <Info>
                  <h3>Platforms</h3>{' '}
                  <Platforms>
                    {game.platforms.map(data => (
                      <img
                        alt={data.platform.name}
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                      ></img>
                    ))}
                  </Platforms>
                </Info>
              </div>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Galerry>
              {screenshot.results.map(screenshot => (
                <img
                  src={smallImage(screenshot.image, 1280)}
                  alt={screenshot.image}
                  key={screenshot.id}
                />
              ))}
            </Galerry>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  p {
    padding-top: 1rem;
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  min-width: 100vh;
  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 0rem;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Galerry = styled(motion.div)`
  img {
    padding: 1rem 0rem;
  }
`;

export default GameDetail;

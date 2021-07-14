import moment from 'moment';

const gamesApiKey = process.env.REACT_APP_API_KEY;

//Base URL
const baseURL = `https://api.rawg.io/api/`;

const currentDate = moment().format('YYYY-MM-DD');
const lastYear = moment().subtract(1, 'year').format('YYYY-MM-DD');
const nextYear = moment().add(1, 'year').format('YYYY-MM-DD');

const popularGames = `games?key=${gamesApiKey}&dates${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?key=${gamesApiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?key=${gamesApiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;
export const newGamesURL = () => `${baseURL}${newGames}`;

//Game details
export const gameDetailsURL = gameID =>
  `${baseURL}games/${gameID}.json?&key=${gamesApiKey}`;
export const gameScreenshotsURL = gameID =>
  `${baseURL}games/${gameID}/screenshots?&.json?&key=${gamesApiKey}`;

//GETTING DATE - without moment

// //Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };

// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

// //Current year/month/day
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// //Last year
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

// //Next year
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// console.log(currentDate);
// console.log(lastYear);
// console.log(nextYear);

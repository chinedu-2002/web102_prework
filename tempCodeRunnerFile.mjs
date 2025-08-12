import GAMES_DATA from './games.js';
const GAMES_JSON = JSON.parse(GAMES_DATA);

// Filter for funded games (where pledged is greater than or equal to goal)
const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);

// Log the number of funded games
console.log('Number of funded games:', fundedGames.length);

// Log the names of funded games with their pledged/goal amounts
console.log('Funded games:', fundedGames.map(game => ({
    name: game.name,
    pledged: game.pledged,
    goal: game.goal
})));

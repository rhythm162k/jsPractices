"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
// console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

const { team1: holu1, team2: holu2, x: draw } = game.odds;

// console.log(holu1, holu2, draw);

function printGoals(...playerName) {
  for (let i = 0; i < playerName.length; i++) console.log(playerName[i]);
  console.log(playerName.length);
}

printGoals(...game.scored);

// console.log(...game.scored);

holu1 > holu2 && console.log("team 1 wins");
holu1 < holu2 && console.log("team 2 wins");

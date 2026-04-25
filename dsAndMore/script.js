"use strict";

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//challenge #1
//task-01
// const [player1, player2] = game.players;
// console.log(player1, player2);

//task-02
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

//task-03
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

//task-04
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

//task-05
// const { team1: holu1, team2: holu2, x: draw } = game.odds;
// console.log(holu1, holu2, draw);

//task-06
// function printGoals(...playerName) {
//   for (let i = 0; i < playerName.length; i++) console.log(playerName[i]);
//   console.log(playerName.length);
// }

// printGoals(...game.scored);
// console.log(...game.scored);

//task-06
// holu1 > holu2 && console.log("team 1 wins");
// holu1 < holu2 && console.log("team 2 wins");

//challenge #2
//task-01
// for (const [goal, playerName] of game.scored.entries())
//   console.log(`Goal ${goal + 1}: ${playerName}`);

//task-02
// let sum = 0;
// const entry = Object.values(game.odds);
// for (const oddValues of entry) {
//   sum += oddValues;
// }
// console.log(sum / entry.length);

//task-03
// for (const [team, odd] of Object.entries(game.odds)) {
//   let str = team === "x" ? "draw" : `victotry ${game[team]}`;
//   console.log(`Odd of ${str} : ${odd}`);
// }

// const scorers = {};
// const scored = ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];

// for (const player of scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }

// console.log(scorers);

//challenge-03
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

//task-01
// const events = [...gameEvents.values()];
// console.log([...new Set(events)]);

//task-02
// gameEvents.delete(64);
// console.log(gameEvents);

//task-03
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

//task-04
// for (const [time, el] of gameEvents) {
//   const half = time > 45 ? "[Second Half]" : "[First Half]";
//   console.log(`${half} ${time}: ${el}`);
// }

//chalenge-04
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

"use strict";
// let country = "bangladesh";
// let continent = "asia";
// let population = "one billion";

// console.log(country);
// console.log(continent);
// console.log(population);

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// console.log(
//   `The bill is ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }`
// );

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas)
//     return console.log(`Dolphines win (${avgDolhins} vs ${avgKoalas})`);
//   else if (avgKoalas >= 2 * avgDolhins)
//     return console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//   else return console.log("No team wins!");
// }

// const dolphins = calcAverage(85, 54, 41);
// const koalas = calcAverage(23, 34, 27);

// checkWinner(dolphins, koalas);

// const jonas = {
//   firstName: "Rhythm",
//   lastName: "bashar",
//   birthYear: 2009,
//   job: "SWE",
//   hasDriverLisence: true,
//   calAge: function () {
//     this.age = 2026 - this.birthYear;
//     this.hasDriverLisence = this.age >= 18 ? true : false;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calAge()}-year old ${
//       this.job
//     }, and has ${this.hasDriverLisence ? "a" : "no"} driver's lisence`;
//   },
// };

// console.log(jonas.getSummary());

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// function calcTip() {
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       tips.push(bills[i] * 0.15);
//       totals.push(tips[i] + bills[i]);
//     } else {
//       tips.push(bills[i] * 0.2);
//       totals.push(tips[i] + bills[i]);
//     }
//   }
//   console.log(tips);
//   console.log(totals);

//   const average = calcAverage(tips);
//   console.log(average);
// }

// calcTip();

// function printForecast(arr) {
//   let output = "...";
//   for (let i = 0; i < arr.length; i++) {
//     output += `${arr[i]} degree C in ${i + 1} days...`;
//   }
//   console.log(output);
// }

// const arr = [12, 5, -5, 0, 4];
// printForecast(arr);

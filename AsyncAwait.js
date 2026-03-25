// console.log("hi there");
// async function weather() {
//   let delhiWether = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("DLH");
//     }, 1000);
//   });
//   let bangLoreWeather = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("BNG");
//     }, 6000);
//   });
//   let delhiW = await delhiWether;
//   console.log("Fetching delhi weather");

//   let bangloreW = await bangLoreWeather;
//   console.log("bangLoreWeather fetched");

//   return [delhiW, bangloreW];
// }

// console.log(weather());

// async function weather() {
//   let delhiweather = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Abcd");
//     }, 1000);
//   });
//   let bbnsweather = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("BBSN");
//     }, 3000);
//   });
//   let delhiW = await delhiweather;
//   let bbsnW = await bbnsweather;
//   return [delhiW, bbsnW];
// }

// weather();

async function idontKnow() {
  let tannuShri = new Promise((res, rej) => {
    setTimeout(() => {
      res("Actually she Never Promised Anything");
    }, 2000);
  });
  let himanshuS = new Promise((res, rej) => {
    setTimeout(() => {
      res("Lots of promises everyTime, Which was never needed");
    }, 3000);
  });
  let goodForHer = await tannuShri;
  let badLuckInLove = await himanshuS;
  return [goodForHer, badLuckInLove];
}

console.log(idontKnow());

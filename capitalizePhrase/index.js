function capitalizePhrase(str) {
  return str
    .split(" ")
    .map((i) => capitalize(i))
    .join(" ");
}

// function capitalize(str) {
//   if (typeof str === "string") {
//     const capitalStr = str.replace(/^\w/, function (c) {
//       return c.toUpperCase();
//     });
//     return capitalStr;
//   } else return "";
// }

function capitalize(str) {
  if (typeof str === "string") {
    const capitalStr = str[0].toUpperCase() + str.slice(1);
    return capitalStr;
  } else return "";
}

console.log(capitalizePhrase("hi there, how was your day."));

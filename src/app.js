// let dominio = [".com", ".org", ".net", ".io"];
// let pronoun = ["the", "our"];
// let adj = ["great", "big"];
// let noun = ["jogger", "racoon"];

// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < noun.length; j++) {
//     for (let p = 0; p < adj.length; p++) {
//       for (let r = 0; r < dominio.length; r++) {
//         console.log(`${pronoun[i]}${noun[j]}${adj[p]}${dominio[r]}`);
//       }
//     }
//   }
// }

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

// let combination = pronoun
//   .concat(adj)
//   .concat(noun)
//   .forEach(function(item) {
//     console.log(item);
//   });
pronoun.forEach(element => {
  return adj.forEach(elemento2 => {
    console.log(element + elemento2);
  });
});

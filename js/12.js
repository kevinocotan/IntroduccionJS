const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Next.js",
];

// console.log(tecnologias[0])
// console.log(tecnologias[1])
// console.log(tecnologias[2])
// console.log(tecnologias[3])
// console.log(tecnologias[4]) // Esto nunca se hace.

// for(let i = 0; i < 6; i++) {
//     console.log(tecnologias[i])
// }

// foreach

// const arrayforEach = tecnologias.forEach(function (tech) {
//   console.log(tech);
// });

// map

const arrayMap = tecnologias.map(function (tech) {
  return tech;
});

// diferencia entre un foreach  un map. Es que el map te genera un nuevo arreglo.

// for .. of

for(let tech of tecnologias) {
    console.log(tech)
}

// console.log(arrayforEach);
// console.log(arrayMap);

const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];


// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("\nImprimir el nombre de cada explorer en la lista");
explorers.forEach(explorers => console.log(explorers.name));

// 2. Imprime el stack de cada explorer, usa FOR EACH
console.log("\nImprimir el stack de cada explorer");
explorers.forEach(explorers => console.log(explorers.stack));

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nCrea una nueva lista con las listas de stacks de cada explorer");
const stackExplorers = explorers.map(explorers => explorers.stack);
console.log(stackExplorers);

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\nObtén la lista de explorers que tengan en su stack 'js'");
const explorersFilter = explorers.filter(explorers => explorers.stack.includes("js"));
console.log(explorersFilter);

// 5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\nBusca el primer explorer que sea de la CDMX");
const explorersFind = explorers.find(explorers => explorers.city === "CDMX");
console.log(explorersFind);

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("\nObtén la suma de todos los exercises_completed");
const sumExercisesCompleted = explorers.reduce((acc, curr) => acc + curr.exercises_completed, 0);
console.log(sumExercisesCompleted);

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("\nObtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true");
const isFrontendFinished = explorers.some(explorers => explorers.missions.frontend.exercisesFinished === true);
console.log(isFrontendFinished);

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("\nObtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true");
const areAllFinishedOnboarding = explorers.every(explorers => explorers.missions.onboarding.isFinished === true);
console.log(areAllFinishedOnboarding);
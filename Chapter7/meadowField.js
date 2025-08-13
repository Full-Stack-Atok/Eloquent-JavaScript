const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdges(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdges(from, to);
    addEdges(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

VillageState.random = function (parcelCount = 100) {
  let parcels = [];

  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) }; // roadGraph["Post Office"] :
}

function routeRobot(state, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((a) => a.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
  return null;
}

function goalOrientedRobot({ place, parcels }, route) {
  let parcel = parcels[0];
  if (parcel.place !== place) {
    route = findRoute(roadGraph, place, parcel.place);
  } else {
    route = findRoute(roadGraph, place, parcel.address);
  }
  return { direction: route[0], memory: route.slice(1) };
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(action.direction);
  }
}

function cloneVillageState(state) {
  return new VillageState(
    state.place,
    state.parcels.map((p) => ({ place: p.place, address: p.address }))
  );
}

function compareRobots(
  state,
  robot1,
  robot2,
  robot3,
  memory1,
  memory2,
  memory3
) {
  let original = state;
  let state1 = cloneVillageState(original);
  let state2 = cloneVillageState(original);
  let state3 = cloneVillageState(original);

  for (let turn = 0; ; turn++) {
    if (state1.parcels.length === 0) {
      console.log(`Done in ${turn} turns.`);
      break;
    }
    let action = robot1(state1, memory1);
    state1 = state1.move(action.direction);
    memory1 = action.memory;
    console.log(action.direction);
  }
  for (let turn = 0; ; turn++) {
    if (state2.parcels.length === 0) {
      console.log(`Done in ${turn} turns.`);
      break;
    }
    let action = robot2(state2, memory2);
    state2 = state2.move(action.direction);
    memory2 = action.memory;
    console.log(action.direction);
  }
  for (let turn = 0; ; turn++) {
    if (state3.parcels.length === 0) {
      console.log(`Done in ${turn} turns.`);
      break;
    }
    let action = robot3(state3, memory3);
    state3 = state3.move(action.direction);
    memory3 = action.memory;
    console.log(action.direction);
  }
}

compareRobots(
  VillageState.random(),
  randomRobot,
  routeRobot,
  goalOrientedRobot,
  [],
  [],
  []
);

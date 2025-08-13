roadGraph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "F"],
  F: ["D", "E"],
};

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }]; 
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
        console.log(work);
      }
    }
  }
  return null;
}

console.log(findRoute(roadGraph, "A", "F"));

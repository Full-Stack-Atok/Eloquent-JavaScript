const { SCRIPTS } = require("../script.js");

characterScript = (code) => {
  for (let script of SCRIPTS) {
    for (let [to, from] of script.ranges) {
      if (code >= to && code < from) {
        return script;
      }
    }
  }
  return null;
};

countBy = (items, groupName) => {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);

    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
};

dominantDirection = (text) => {
  let codes = [];

  for (char of text) {
    codes.push(char.codePointAt(0));
  }

  let result = codes.map((m) => characterScript(m));

  let filtered = result.filter((m) => m !== null);

  let count = countBy(filtered, (script) => script.direction);

  return count;
};

console.log(dominantDirection("Hello"));

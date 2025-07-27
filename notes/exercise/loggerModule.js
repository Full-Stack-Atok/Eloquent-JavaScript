/*
  🗃️ Exercise 3: Module-Based Logger
🔧 Objective:
Create a logger module that stores messages in a private internal log.

You'll use an Immediately Invoked Function Expression (IIFE) to:

Encapsulate the internal log array

Return only the public interface

✅ Requirements:
Your module should have:

🔒 Private:
A logs array that stores all messages (each message should include a timestamp)

🌐 Public Methods:
log(message)
 → Adds a message to the logs, prepended with a timestamp.

getLogs()
 → Returns all the logged messages (you can just return the array or print them).

🔒 Encapsulation Rules:
The internal logs array must not be accessible from outside the module.

Only the log() and getLogs() methods should have access.
*/

const logger = (function () {
  let logs = [];

  return {
    createLog(message) {
      logs.push({ message, time: new Date() });
    },
    getLogs() {
      return console.log(logs);
    },
  };
})();

logger.createLog("Hello");
logger.getLogs();

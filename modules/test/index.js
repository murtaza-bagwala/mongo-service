const data = require("./config.json");
const path = require("path");
console.log(`hey ${path.resolve(data.migrationsDir)}`);

module.exports = {
	data
};

const mongo = require("@dumy/mongo");
const test = require("@dumy/test");
console.log(test);
const options = {
	migrationsPath: test.data.migrationsDir,
	dbConnectionUri: "mongodb://127.0.0.1:27017/AppScanner"
};

exports.run = async () => {
  const result = await mongo.runMigration(options);
  console.log(result);
}

this.run();


// const collectionName = "migrations";
// const autosync = true;
// let connection = null;

// exports.runMigration = async options => {
//   options.collectionName = options.collectionName || collectionName;
//   options.autosync = options.autosync || autosync;
//   const migrator = new migrateMongoose(options);
//   const promise = await migrator.run("up", options.migrationName);
//   console.log(promise);
//   return promise;
// };

// exports.connect = async uri => {
//   mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//   connection = mongoose.connection;
//   connection.once("open", () => {
//     console.log("MongoDB database connection established successfully");
//   });
//   return connection;
// };

// exports.getConnection = () => connection;

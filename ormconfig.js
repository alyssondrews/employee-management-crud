module.exports = {
   "type": "postgres",
   "host": process.env.HOST_DB,
   "port": process.env.PORT_DB,
   "username": process.env.USER_DB,
   "password": process.env.PASS_DB,
   "database": process.env.DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migrations"
   }
}
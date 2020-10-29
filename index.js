require('dotenv').config()
const server = require("./api/server.js");

const port = process.env.PORT || 5000; //ONLY LOCAL
const secret = process.env.SECRET_THINGS || "the secret for development"
 // ONLY HEROKU
console.log(port, secret);
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

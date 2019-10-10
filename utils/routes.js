console.log("inside of routes.js");

const Dogs = require('../controllers/dogs');

module.exports = function(app) {
    app.get("/", Dogs.index);
    app.post("/create", Dogs.create);
    app.get("/dog/:_id", Dogs.show);
}
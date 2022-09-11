module.exports = app => {
  const users = require('../controllers/users.controllers.js');

  var router = require('express').Router();

  router.post("/", users.register);
  router.put('/login/', users.login);
  router.put('/logout/', users.logout);
  router.put('/details/', users.updateOwnDetails);
  router.get("/details", users.getOwnDetails);
  
  app.use("/users", router)
}
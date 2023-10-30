const { getAll, create, getOne, remove, update } = require('../controllers/user.controllers');
const express = require('express');


const userRouter = express.Router();

userRouter.route("/") // /user
     .get(getAll)
     .post(create)
    
userRouter.route("/:id")   // /user/:id
     .get(getOne)
     .delete(remove)
     .put(update);   

module.exports = userRouter;
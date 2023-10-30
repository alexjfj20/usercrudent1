const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');


// colocar las rutas aquí

router.use('/user', userRouter);


module.exports = router;
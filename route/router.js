//import the express model
const express = require('express')
//import the controller module
const {welcomeMessage, createBill, readAll, readOne, deleteOne, updateOne} = require('../controller/controller')

const powerRoute = express.Router();

// powerRoute.get('/', welcomeMessage);
// powerRoute.get('/electricbill', readAll);
// powerRoute.post('/electricbill', createBill);
// powerRoute.get('/electricbill/:id', readOne)
// powerRoute.delete('/electricbill/:id', deleteOne)
// powerRoute.patch('/electricbill/:id', updateOne)

powerRoute.route('/electricbill').post(createBill).get(readAll);
powerRoute.route('/electricbill/:id').get(readOne).patch(updateOne).delete(deleteOne)


module.exports = 
    powerRoute


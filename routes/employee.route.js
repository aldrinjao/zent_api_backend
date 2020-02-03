const express = require('express');
const app = express();
const readingRoute = express.Router();

// Employee model
let Employee = require('../models/Employee');

let Reading = require('../models/Reading');
let Device = require('../models/Device');



// Add Employee
readingRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Add Device
readingRoute.route('/createdevice').post((req, res, next) => {
  Device.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log('222aaaa');
      res.json(data)
    }
  })
});


readingRoute.route('/createctd').post((req, res, next) => {
  Reading.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get single employee
readingRoute.route('/getlatestreading/:qdeviceSN').get((req, res) => {
  
  Reading.findOne({device: req.params.qdeviceSN},null, {sort: {mrid: -1 }} ,(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Devices
readingRoute.route('/getalldevices').get((req, res) => {
  Device.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Get All Readings for device qdevice
readingRoute.route('/getallreadings/:qdeviceSN').get((req, res) => {
  Reading.find({device: req.params.qdeviceSN},null, {sort: {timestamp: 1 }},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Get All Employees
readingRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
readingRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
readingRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
readingRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})







module.exports = readingRoute;
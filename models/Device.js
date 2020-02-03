const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Device = new Schema({
   deviceSN: {
      type: String
   },
   devicePW: {
      type: String
   },
   deviceName: {
      type: String
   },
   deviceLong: {
      type: Number
   },  
   deviceLat: {
      type: Number
   } ,
   deviceType: {
      type: String
   } 



}, {
   collection: 'Devices'
})

module.exports = mongoose.model('Device', Device)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Awsdevice = new Schema({
   deviceSN: {
      type: String
   },
   devicePW: {
      type: String
   },
   name: {
      type: String
   },
   long: {
      type: Number
   },  
   lat: {
      type: Number
   }  



}, {
   collection: 'Awsdevices'
})

module.exports = mongoose.model('Awsdevice', Awsdevice)
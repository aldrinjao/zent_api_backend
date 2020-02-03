const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Ctddevice = new Schema({
   deviceSN: {
      type: String
   },
   devicePW: {
      type: String
   },
   reading:[{
      timestamp: {
         type: Number
      },
      mrid : {
         type: Number
      },
      values:[{
         units: {
            type: String
         },
         description: {
            type: String
         },
         value: {
            type: Number
         },
         error: {
            type: String
         }


      }]

   }]



}, {
   collection: 'Ctddevices'
})

module.exports = mongoose.model('Ctddevice', Ctddevice)

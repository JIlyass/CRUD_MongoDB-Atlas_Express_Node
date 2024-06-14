const mongoose = require('mongoose')
const connectionDB = (stringConnection)=>{
    mongoose.connect(stringConnection).then(()=>{
        console.log("connected to MongoDb atlas DB...");
    })
}

module.exports = connectionDB;
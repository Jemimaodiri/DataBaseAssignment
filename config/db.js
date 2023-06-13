const mongoose = require('mongoose');
const set07DB="mongodb://0.0.0.0:27017/JemimaDataBase";

const JemimaDataBase=async()=>{
    try {
        const Db=await mongoose.connect(set07DB)
        console.log("")
        console.log(`Database is connected to ${Db.connection.host}`)
   
    } catch (error) {
        console.log("An error during connection:", error)
    }
}
module.exports=JemimaDataBase()
;
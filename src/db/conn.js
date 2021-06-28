const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/GrowMore", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})





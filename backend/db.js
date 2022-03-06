const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

const userSchema= ({

name:{
    type:String,
    required: true,
    min:6,
    max:10,
},
email:{
 
    type:String,
    required: true,
    min:7,
    max:100,

},
password:{
    type:String,
    required:true,
    min:5,
    max:244,
    
}

});


module.exports=mongoose.model("Users",userSchema);
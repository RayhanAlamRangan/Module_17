


//import mongoose from 'mongoose';
const mongoose=require("mongoose");
const CustomerSchema= new mongoose.Schema({

username:{


    type:String,
    required:true,
    unique:true,
},

email:{

    type:String,
    required:true,
    unique:true,

},

password:{

    type:String,
    min:5,
    max:50,

},
isAdmin:{

    type:Boolean,
    default:false,
}


});


const Customer= mongoose.model("Customer",  CustomerSchema   );



module.exports=Customer;
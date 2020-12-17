const mongoose=require('mongoose')
const Schema=mongoose.Schema

const StaffRegistration=new Schema({
    firstname:{type:String,required:true},
    middlename:{type:String},
    lastname:{type:String,required:true},
    membertype:{type:String,required:true},
    collegename:{type:String,required:true},
    enrollmentno:{type:String,required:true},
    email:{type:String,required:true}
},{collection:'staffregistration'})

module.exports=mongoose.model('staffregistration',StaffRegistration)
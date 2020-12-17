var collegeRegistrationSchema = require('./schema/collegeregistrationschema')
var StaffRegistrationSchema = require('./Schema/staffregistrationschema')
var nodemailer=require('nodemailer');

const nodeMailer=()=>{
    var mail=req.body.email;
    var transporter=nodemailer.createTransport({
        service: 'gmail',
        secure:false,
    auth: {
        user: 'thedailyofferjuet@gmail.com',
        pass: 'cpcolony@128'
    }
    });

    let mailOptions ={
        from :'s22ubbu@gmail.com',
        to:mail,
        subject:'mail for authentication at college circle',
        text:msg
    };
    transporter.sendMail(mailOptions,function(error,result){
        if(error)
        {
            console.log(error)
            return res.status(500).json({RESULT:false})
        }
        else{
            console.log('Email send')
            return res.status(200).json({RESULT:true});
        }
    })
}

exports.collegeRegistraion = async(req,res)=>{
    const body = req.body
    console.log("A:",body)
    const newData = new collegeRegistrationSchema(body)
    newData.save((error)=>{
        if(error)
        {
            console.log(error)
            return res.status(400).send({error:'Data Error',message:"Try again"})
        }
    })
    return res.status(201).json({success:true,message:"request send"})
}

exports.staffRegistration = async(req,res) =>{
    const body = req.body
    const newData = new StaffRegistrationSchema(body)
    newData.save((error)=>{
        if(error)
        {
            console.log(error)
            return res.status(400).send({error:'Data Error',message:"Try again"})
        }
    })
    return res.status(201).json({success:true,message:"request send"})
}

exports.login = async(req,res) =>{
    const {email,password} = req.body
    
}



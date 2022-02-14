const jwt = require ('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');



//get mean read
require('../db/conn');


const User = require('../models/userschema');


router.get('/api', (req , res) =>{
 res.send(`hello world from the server router.js`);

} )
//Async-Await
router.post('/register',async(req,res) => {
    const {name, email, phone, work, password, cpassword}= req.body;

    if(!name || !email || !phone || !work || !password ||  !cpassword) {
        return res.status(422).json( {error:"plz fill the detail"});
    }
    try{
        const userExist =await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({error: "Emial already register"});

        }else if(password != cpassword){
            return res.status(422).json({error: "Emial already register"});

        } else{
    const user =new User({name, email, phone, work, password, cpassword});
    await user.save();

     res.status(201).json({message: "user registers successfilly"});
     
        }
    }catch (err) {
        console.log(err);
    }
});

//login route

router.post('/signin', async (req,res) => {
try {
    let token;
    const { email,password} = req.body;
     
    if(!email ||  !password) {
      return res.status(400).json({error:"plz fill the data"})
}


const userLogin =  await User.findOne({email: email});

        // console.log(userLogin);

if(userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password);
   
    if(!isMatch){
        res.status(400).json({message:"Invalid credientials"});
    }
    else { token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        res.header('Content-Type', 'application/json;charset=UTF-8')
        res.header('Access-Control-Allow-Credentials', true)
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        res.json({ message: "user Signin Successfully" });
        }
        
    }else{
        res.status(400).json({message:"Invalid credientials"});
    
    }
    
    
    // console.log(userLogin);
    
    
    }catch(err){
        console.log(err);
    }
    });

    // about page middleware
    router.get('/about', authenticate, (req, res) => {
        console.log("Hello, my about");
        res.send(req.rootUser);
    })

    //logout ka page
    
router.get('/logout', (req , res) =>{
    console.log( "Hello my Logout "); 
   res.clearCookie('jwtoken',{ path:'/'});
   res.status(200).send('userlogout');
   
   } );

module.exports =  router;
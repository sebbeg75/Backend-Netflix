const { User, Token } = require('../models/index')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserController={
    
   async register(req,res){
       try {
        const hash = await bcrypt.hash(req.body.password,10)
        const user = await User.create({
            ...req.body,
            password:hash
        })
         res.send(user); 
       } catch (error) {
        console.log(error)
        res.status(500).send 
       }
    },
    login(req,res){
        User.findOne({
            where:{
                username:req.body.username
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
          bcrypt.compare(req.body.password,user.password).then(isMatch=>{
            if(!isMatch){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            } 
            const token = jwt.sign({id:user.id}, 'mimamaMeMima' , {expiresIn:'2w'} );
            Token.create({token,UserId:user.id}); //añadimos el token al final del array
            res.send({message:'Bienvenido Sr', user,token});
          });
        })
    },
    profiles(req,res){
        User.findAll()
        .then(users => res.send(users))
        .catch(err=>{
            console.log(err)
            res.status(500).send({message:'Ha habido un problema al cargar los usuarios'})
        })
    }
}; 
module.exports=UserController;



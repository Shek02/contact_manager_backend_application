const asymcHanler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken = asymcHanler(
   async (req, res, next)=>{
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        console.log('fuzion');
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode)=>{
            if(err){
                res.status(401)
                throw new Error('user is not autorized');

            }
            req.user = decode.user;
            next()
        })

        if(!token){
            res.status(401);

            throw new Error("User is not authorized or the token is missing")
        }
    }
   }
)

module.exports = validateToken
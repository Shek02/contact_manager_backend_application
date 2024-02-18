const asymcHanler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asymcHanler(
   async (req, res, next)=>{
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode)=>{
            if(err){
                res.status(401)
                throw Error('user is not autorized');

            }
            console.log(decode);
        })
    }
   }
)

module.exports = validateToken
const jwt = require('jsonwebtoken');
const Api = require('../model/api');
const User = require('../model/user');
exports.isSignedIn = async(req, res, next) => {
    try{
        const token = 
            req.cookies.token || 
            req.body.token || 
            req.header("Authorization")?.replace("Bearer ", "");
        
        if(!token){
            return res.status(403).json({
                success: false,
                error: "Token is missing."
            });
        }

        const { SECRET_KEY } = process.env;

        const decode = jwt.verify(token, SECRET_KEY);

        const { _id } = decode;

        const user = await User.findOne({ _id });
        
        if(!user || user?.token !== token){
            return res.status(403).json({
                success: false,
                error: "Invalid Token."
            });
        }
        
        req.user = user;
        next();

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.isAuthorized = async(req, res, next) => {
    try{

        const token = req.body.token || 
            req.header("Authorization")?.replace("Bearer ", "");
        
        if(!token || token.trim()?.length !== 24){
            return res.status(403).json({
                success: false,
                error: "Token is missing."
            });
        }


        const api = await Api.findOne({ _id: token });
        if(api && api.isActive === true){
            next();
        }

        if(!api){
            return res.status(400).json({
                success: false,
                error: "Invalid Token found."
            })
        }

        return res.status(400).json({
            success: false,
            error: "Token must be subscribed to use."
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            error: error
        })
    }
}

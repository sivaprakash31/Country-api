const User = require("../model/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    try{
        const { name, email, password } = req.body;
        
        if(!(email && password && name)){
            return res.status(400).json({
                success: false,
                error: "All fields required."
            });
        }

        const existingUser = await User.findOne({ email });
        
        if(existingUser !== null){
            return res.status(401).json({
                success: false,
                error: "User already exists."
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPassword
        });

        const { SECRET_KEY } = process.env;

        const token = jwt.sign(
            {
                _id: user._id,
                email: email
            },
            SECRET_KEY,
            { expiresIn: "2h" }
        );

        user.password = undefined;
    
        user["token"] = token;

        await User.findOneAndUpdate({ email }, { $set: { token: token } });

        res.clearCookie('token');

        const cookieOptions = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        return res.status(200).cookie("token", token, cookieOptions).json({
            success: true,
            user: user
        });


    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error
        });
    }
}

exports.login = async(req, res) => {
    try{
        const { email, password } = req.body;
        
        if(!(email && password)){
            return res.status(400).json({
                success: false,
                error: "All fields are required."
            });
        }

        const user = await User.findOne({ email });
        
        if(user && (await bcrypt.compare(password, user.password))){

            const { SECRET_KEY } = process.env;
            const token = jwt.sign(
                {
                    _id: user._id,
                    email: email,
                },
                SECRET_KEY,
                { expiresIn: "2h" }
            );

            user["token"] = token;

            await User.findOneAndUpdate({ email },{$set: {token: token}});

            res.clearCookie('token');

            const cookieOptions = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            return res.status(200).cookie("token", token, cookieOptions).json({
                success: true,
                user: user
            });

            // return res.status(200).json({
            //     success: true,
            //     user: user
            // });
        }



        return res.status(400).json({
            success: false,
            error: "email or password is incorrect."
        });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}
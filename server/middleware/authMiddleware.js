const jwt = require("jsonwebtoken");
const User = require("../models/User");


const authMiddleware = async (req, res, next) => {

    try {

        // Token collect
        const token = req.headers.authorization?.split(" ")[1];


        if (!token) {
            return res.status(401).json({
                success:false,
                message:"No token found"
            });
        }



        // Verify Token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );



        // Find user from database
        const user = await User.findById(decoded.id)
        .select("-password");



        if(!user){

            return res.status(404).json({
                success:false,
                message:"User not found"
            });

        }



        // Attach user
        req.user = user;


        next();



    } catch(error){


        res.status(401).json({

            success:false,
            message:"Invalid Token"

        });


    }

};


module.exports = authMiddleware;
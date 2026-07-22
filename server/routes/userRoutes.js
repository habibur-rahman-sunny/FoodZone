const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();



// =====================
// Get Logged User Profile
// =====================

router.get(
    "/profile",
    authMiddleware,
    async (req, res) => {

        try {

            const user = await User.findById(req.user.id)
            .select("-password");


            res.status(200).json({

                success: true,
                user

            });


        } catch(error){

            res.status(500).json({

                success:false,
                message:error.message

            });

        }

    }
);




// =====================
// Update User Profile
// =====================

router.put(
    "/profile",
    authMiddleware,
    async(req,res)=>{


        try{


            const updatedUser = await User.findByIdAndUpdate(

                req.user.id,

                {
                    phone:req.body.phone,
                    address:req.body.address,
                    photo:req.body.photo
                },

                {
                    new:true
                }

            ).select("-password");



            res.status(200).json({

                success:true,

                message:"Profile updated successfully",

                user:updatedUser

            });



        }catch(error){


            res.status(500).json({

                success:false,

                message:error.message

            });


        }


    }
);



module.exports = router;
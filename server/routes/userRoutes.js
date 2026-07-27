const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();



// ==============================
// Get Logged In User Profile
// ==============================
router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
        .select("-password");

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.status(200).json({
        success: true,
        user,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }
);



// ==============================
// Update Logged In User Profile
// ==============================
router.put(
  "/profile",
  authMiddleware,
  async (req, res) => {

    try {

      const {
        name,
        phone,
        address,
        photo,
      } = req.body;


      const updatedUser =
        await User.findByIdAndUpdate(

          req.user.id,

          {
            name,
            phone,
            address,
            photo,
          },

          {
            new: true,
            runValidators: true,
          }

        ).select("-password");


      res.status(200).json({

        success: true,

        message: "Profile Updated Successfully",

        user: updatedUser,

      });


    } catch (error) {

      res.status(500).json({

        success: false,

        message: error.message,

      });

    }

  }
);

module.exports = router;
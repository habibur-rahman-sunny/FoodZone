const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");


// =====================
// Register User
// =====================
const registerUser = async (req, res) => {
  try {

    const { 
      name, 
      email, 
      password, 
      phone, 
      address, 
      photo 
    } = req.body;


    // Check existing user
    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }


    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);


    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      photo,
    });


    res.status(201).json({
      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        photo: user.photo,
        role: user.role,
      },

    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};




// =====================
// Login User
// =====================
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;


    // Find User
    const user = await User.findOne({ email });


    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }



    // Compare Password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }



    // Create JWT Token
    const token = jwt.sign(

      {
        id: user._id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );



    res.status(200).json({

      message: "Login successful",

      token,


      user: {

        id: user._id,

        name: user.name,

        email: user.email,

        phone: user.phone,

        address: user.address,

        photo: user.photo,

        role: user.role,

      },


    });



  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  registerUser,
  loginUser,
};
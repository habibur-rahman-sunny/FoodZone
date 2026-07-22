"use client";

import { useState } from "react";


const Register = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        photo:"",
    });


    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };


    const handleRegister = async(e)=>{
        e.preventDefault();


        const res = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            }
        );


        const data = await res.json();


        if(res.ok){
            alert("Registration successful");
            window.location.href="/login";
        }
        else{
            alert(data.message);
        }

    };



    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-purple-100">


            <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg">


                <h1 className="text-3xl font-bold text-center text-[#5B4BFF]">
                    Create Account 🍔
                </h1>

                <p className="text-center text-gray-500 mb-7">
                    Join FoodZone today
                </p>



                <form onSubmit={handleRegister} className="space-y-4">


                    {
                    [
                        ["name","Full Name"],
                        ["email","Email"],
                        ["password","Password"],
                        ["phone","Phone"],
                        ["address","Address"],
                        ["photo","Profile Photo URL"]
                    ].map(([name,placeholder])=>(

                        <input
                            key={name}
                            name={name}
                            type={name==="password"?"password":"text"}
                            placeholder={placeholder}
                            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-orange-400"
                            onChange={handleChange}
                        />

                    ))
                    }



                    <button
                    className="w-full bg-gradient-to-r from-[#5B4BFF] to-orange-500 text-white py-3 rounded-xl font-semibold hover:scale-105 duration-300">
                        Create Account
                    </button>


                </form>



                <p className="text-center mt-6 text-gray-600">

                    Already have account?

                    <a href="/login" className="text-[#5B4BFF] font-semibold ml-2">
                        Login
                    </a>

                </p>


            </div>

        </div>

    );
};


export default Register;
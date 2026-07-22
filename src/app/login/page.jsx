"use client";

import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login successful");
            window.location.href = "/";
        }
        else {
            alert(data.message);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-orange-100">

            <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-[#5B4BFF]">
                    Welcome Back 👋
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Login to continue FoodZone
                </p>


                <form onSubmit={handleLogin} className="space-y-5">


                    <div>
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>


                    <div>
                        <label className="text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>


                    <button
                        className="w-full bg-[#5B4BFF] text-white py-3 rounded-xl font-semibold hover:bg-purple-700 duration-300">
                        Login
                    </button>


                </form>


                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?
                    <a href="/register" className="text-[#5B4BFF] font-semibold ml-2">
                        Register
                    </a>
                </p>


            </div>

        </div>
    );
};


export default LoginPage;
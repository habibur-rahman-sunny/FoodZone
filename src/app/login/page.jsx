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
            window.location.reload();

            alert("Login successful");
        }
        else {
            alert(data.message);
        }
    };


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
};

export default LoginPage;
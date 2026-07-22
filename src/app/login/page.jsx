"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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

        // Custom event trigger
        window.dispatchEvent(new Event("storage"));

        alert("Login Successful");
        router.push("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md shadow-xl p-8 rounded-2xl space-y-5 bg-white"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 rounded font-medium disabled:bg-indigo-300 transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-600 mt-5">
          Don't have an account?
          <Link
            href="/Register"
            className="text-indigo-600 font-semibold ml-2 hover:underline"
          >
            Create New Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, Mail, Phone, MapPin, Shield, Activity, 
  Edit3, Key, Settings, LogOut, CheckCircle2 
} from "lucide-react";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Profile Fetching Logic (আগের ফাংশনালিটি)
  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
        } else {
          localStorage.removeItem("token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [router]);

  // Logout Logic (আগের ফাংশনালিটি)
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Logout Successful");
    router.push("/login");
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Access Restricted Screen
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md border border-slate-200">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Access Restricted</h2>
          <p className="text-slate-500 text-sm mb-6">
            Please log in to your account to view and manage your profile dashboard.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg shadow-indigo-200"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        
        {/* Cover Header */}
        <div className="h-48 md:h-56 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 relative p-6 flex items-end">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
              User Dashboard
            </span>
          </div>
        </div>

        {/* Dashboard Grid Container */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          
          {/* Avatar floating between banner & body */}
          <div className="absolute -top-16 left-8 md:left-12">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-white p-2 shadow-xl ring-1 ring-slate-100">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-4xl font-extrabold text-white shadow-inner">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </div>

          {/* Left Column: Profile Summary */}
          <div className="md:col-span-5 pt-12 md:pt-14 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {user?.name}
                </h1>
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              </div>
              <p className="text-slate-500 text-sm font-medium flex items-center gap-1.5 mt-1">
                <Mail className="w-4 h-4 text-slate-400" />
                {user?.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-xl text-xs border border-indigo-100 capitalize">
                Role: {user?.role || "User"}
              </span>
              <span className="bg-emerald-50 text-emerald-600 font-semibold px-3 py-1 rounded-xl text-xs border border-emerald-100 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active
              </span>
            </div>
          </div>

          {/* Middle Column: Details Grid */}
          <div className="md:col-span-4 space-y-4 pt-2 md:pt-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Contact Information
            </h3>

            {/* Phone */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600 border border-slate-100">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Phone</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {user?.phone || "Not provided"}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl shadow-sm text-indigo-600 border border-slate-100">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Address</p>
                <p className="text-sm font-semibold text-slate-700 mt-0.5 leading-snug">
                  {user?.address || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Quick Links */}
          <div className="md:col-span-3 space-y-3 pt-2 md:pt-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>

              <button className="w-full flex items-center justify-between bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-100">
                <span className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4" /> Edit Profile
                </span>
              </button>

              <button className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl font-medium text-sm border border-slate-200/80 transition-all duration-200">
                <span className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-slate-500" /> Security
                </span>
              </button>

              <button className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl font-medium text-sm border border-slate-200/80 transition-all duration-200">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-500" /> Settings
                </span>
              </button>
            </div>

            {/* Attached actual logout onClick handler */}
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-xl font-semibold text-sm border border-red-100 transition-all duration-200 mt-4 active:scale-95"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Edit3,
  Key,
  Settings,
  LogOut,
  CheckCircle2,
  Upload,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false); // ছবি আপলোড লোডিং স্টেটের জন্য

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    photo: "",
  });

  // ===========================
  // Get Profile Data
  // ===========================
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

          setFormData({
            phone: data.user.phone || "",
            address: data.user.address || "",
            photo: data.user.photo || "",
          });

          setIsEditing(false);
        } else {
          localStorage.removeItem("token");
          router.push("/login");
        }
      } catch (error) {
        console.log("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [router]);

  // ===========================
  // Input Change (Text Input)
  // ===========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===========================
  // Image Upload Handler (Computer File to ImgBB)
  // ===========================
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const imageFormData = new FormData();
    imageFormData.append("image", file);

    try {
      const apiKey = "fe91fe9be03eab5949e77984782bcf37";

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: imageFormData,
      });

      const data = await res.json();

      if (data.success) {
        setFormData((prev) => ({
          ...prev,
          photo: data.data.url,
        }));
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed! Please try again.");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  // ===========================
  // Update Profile
  // ===========================
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        setIsEditing(false);
        alert("Profile Updated Successfully");
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  // ===========================
  // Logout
  // ===========================
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successful");
    window.dispatchEvent(new Event("storage"));
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-10 h-10 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex justify-center items-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold">Access Restricted</h2>
          <p className="text-gray-500 mt-2 mb-6">Please login first.</p>
          <button
            onClick={() => router.push("/login")}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Cover */}
        <div className="h-52 bg-linear-to-r from-violet-600 via-indigo-600 to-purple-600 relative"></div>

        <div className="p-8 grid md:grid-cols-12 gap-6 relative">
          {/* Avatar Area */}
          <div className="absolute -top-16 left-8">
            <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-xl relative">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-linear-to-tr from-indigo-500 to-purple-500 flex justify-center items-center text-white text-4xl font-bold relative">
                {/* এডিটিং থাকা অবস্থায় প্রিভিউ ইমেজ দেখাবে, অন্যথায় প্রফাইলের সেভ করা ছবি */}
                {isEditing && formData.photo ? (
                  <Image
                    src={formData.photo}
                    alt="Preview"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : user.photo ? (
                  <Image
                    src={user.photo}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  user.name?.charAt(0).toUpperCase()
                )}

                {/* লোডিং স্পিনার যখন ছবি আপলোড হবে */}
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="md:col-span-5 pt-16">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <CheckCircle2 className="text-indigo-500 w-5 h-5" />
            </div>

            <p className="flex items-center gap-2 text-gray-500 mt-2">
              <Mail className="w-4 h-4" />
              {user.email}
            </p>

            <div className="mt-5">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                {user.role}
              </span>
            </div>
          </div>

          {/* Contact & Editable Information */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Contact Information
            </h3>

            {/* Phone Input */}
            <div className="bg-slate-50 rounded-2xl p-4 border">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold">Phone</span>
              </div>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              ) : (
                <p className="text-gray-600">{user.phone || "Not Provided"}</p>
              )}
            </div>

            {/* Address Input */}
            <div className="bg-slate-50 rounded-2xl p-4 border">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold">Address</span>
              </div>
              {isEditing ? (
                <textarea
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                />
              ) : (
                <p className="text-gray-600">
                  {user.address || "Not Provided"}
                </p>
              )}
            </div>

            {/* Photo Upload Input (Only visible when Editing) */}
            {isEditing && (
              <div className="bg-slate-50 rounded-2xl p-4 border">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold">
                    Change Profile Photo
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="file-input file-input-bordered w-full"
                />
                {uploading && (
                  <p className="text-xs text-indigo-600 mt-2 font-medium">
                    Uploading photo, please wait...
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions (Edit, Save, Logout buttons) */}
          <div className="md:col-span-3 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quick Actions
              </h3>

              {isEditing ? (
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdate}
                    disabled={uploading}
                    className="btn btn-success flex-1"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        phone: user.phone || "",
                        address: user.address || "",
                        photo: user.photo || "",
                      });
                    }}
                    className="btn btn-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary w-full"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              )}

              <button className="btn btn-outline w-full">
                <Key className="w-4 h-4" />
                Security
              </button>

              <button className="btn btn-outline w-full">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>

            <button onClick={logout} className="btn btn-error w-full">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
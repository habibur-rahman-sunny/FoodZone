"use client";
import { useEffect, useState } from "react";


const ProfilePage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, []);



    if (!user) {
        return (
            <div className="text-center mt-10">
                Please login first
            </div>
        );
    }



    return (

        <div className="max-w-md mx-auto mt-10 p-6 shadow rounded-xl">

            <h1 className="text-3xl font-bold mb-5">
                User Profile
            </h1>

            {/* <Image
                src={user.photo || "https://via.placeholder.com/150"}
                alt="profile"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-5 object-cover"
            /> */}


            <div className="space-y-3">
                <p>
                    <b>Name:</b> {user.name}
                </p>
                <p>
                    <b>Email:</b> {user.email}
                </p>
                <p>
                    <b>Phone:</b> {user.phone}
                </p>
                <p>
                    <b>Address:</b> {user.address}
                </p>
                <p>
                    <b>Role:</b> {user.role}
                </p>
            </div>
        </div>

    );

};


export default ProfilePage;
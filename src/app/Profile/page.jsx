"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  LogOut
} from "lucide-react";



const ProfilePage = () => {


  const router = useRouter();


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);





  useEffect(() => {


    const getProfile = async () => {


      const token = localStorage.getItem("token");



      if (!token) {

        router.push("/login");

        return;

      }



      const res = await fetch(

        "http://localhost:5000/api/user/profile",

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );



      const data = await res.json();



      if (res.ok) {

        setUser(data.user);

      }

      else {

        localStorage.removeItem("token");

        router.push("/login");

      }



      setLoading(false);



    };



    getProfile();



  }, [router]);





  const logout = () => {


localStorage.removeItem("token");


setUser(null);


alert("Logout Successful");


router.push("/login");


};





  if (loading) {


    return (

      <div className="min-h-screen flex items-center justify-center">

        Loading...

      </div>

    )

  }





  return (


    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">


      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">



        <div className="flex justify-center">


          <div className="w-28 h-28 rounded-full bg-indigo-600 text-white flex items-center justify-center text-5xl font-bold">


            {
              user?.name?.charAt(0)
            }


          </div>


        </div>





        <h1 className="text-3xl font-bold text-center mt-5">

          {user?.name}

        </h1>



        <div className="mt-8 space-y-4">



          <div className="flex gap-3">

            <Mail />

            <p>
              {user?.email}
            </p>

          </div>





          <div className="flex gap-3">

            <Phone />

            <p>
              {user?.phone || "No Phone"}
            </p>

          </div>





          <div className="flex gap-3">

            <MapPin />

            <p>
              {user?.address || "No Address"}
            </p>

          </div>





          <div className="flex gap-3">

            <Shield />

            <p>
              Role : {user?.role}
            </p>

          </div>



        </div>





        <button

          onClick={logout}

          className="mt-8 w-full bg-red-500 text-white p-3 rounded-xl flex justify-center gap-2"

        >

          <LogOut />

          Logout

        </button>



      </div>


    </div>


  );


};


export default ProfilePage;
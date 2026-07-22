"use client";


import {useState} from "react";
import {useRouter} from "next/navigation";


const Register =()=>{


const router=useRouter();



const [formData,setFormData]=useState({

name:"",
email:"",
password:"",
phone:"",
address:"",
photo:""

});




const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const handleRegister=async(e)=>{


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



const data=await res.json();



if(res.ok){


localStorage.setItem(
"token",
data.token
);



alert("Registration Successful");


router.push("/");


}
else{

alert(data.message);

}


};




return (

<div className="min-h-screen flex items-center justify-center">


<form

onSubmit={handleRegister}

className="w-96 shadow-xl p-8 rounded-2xl space-y-4"

>


<h1 className="text-3xl font-bold">
Create Account
</h1>



{
["name","email","password","phone","address","photo"]
.map(item=>(

<input

key={item}

name={item}

type={
item==="password"
?
"password"
:
"text"
}

placeholder={item}

className="border p-3 w-full rounded"

onChange={handleChange}

/>

))
}



<button

className="bg-orange-500 text-white w-full p-3 rounded"

>

Register

</button>



</form>


</div>


);


};


export default Register;
// import React from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios'
// import {useHistory as history} from 'react-router'



// export default function LoginForm() {
    
//     const initialValues = {
//         credentials: {
//             username: "",
//             password: ""
//         }
//     }


//     const { register, handleSubmit } = useForm();
//     const onSubmit = data => {
//         // data.preventDefault();
//         axios
//             .post("http://localhost:5000/api/login", initialValues.credentials)
//             .then(res => {
//                 console.log(res);
//                 localStorage.setItem("token", res.data.payload)
//                 history.push("/protected");
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input 
//                 type="text"
//                 name="username"
//                 placeholder="username here"
//                 defaultValue={initialValues.credentials.username}    
//             />
//             <input 
//                 type="password"
//                 name="password"
//                 placeholder="password here"
//                 defaultValue={initialValues.credentials.password}
//             />
//             <input type="submit"/>
//         </form>
//     )
// }
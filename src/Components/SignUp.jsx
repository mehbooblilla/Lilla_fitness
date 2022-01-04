import React,{useState} from 'react';
import Axios from 'axios';
function SignUp() {
    const [usernameReg, setUsername]=useState('')
    const [emailReg, setEmail]=useState('')
    const [passwordReg, setPassword]=useState('')
    const register=()=>{
        Axios.post("http://localhost:3001",{
            username:usernameReg,
            email:emailReg,
            password:passwordReg
        }).then((Response)=>{
            console.log(Response);
        });
        alert("Register Successfully");
    };


    return (
        <div id="signup">
            <h1>Registration</h1>
            <form method='post' action="">
                <input type="text" placeholder="Full Name" required onChange={(e)=>{
                    setUsername(e.target.value);
                }}/>
                <input type="email" placeholder="Email" required onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <input type="password" placeholder="Password" required onChange={(e)=>{
                    setPassword(e.target.value);
                 }} />
                <button className='pr-btn' onClick={register}>Register</button>
            </form>
            
        </div>
    )
}

export default SignUp;

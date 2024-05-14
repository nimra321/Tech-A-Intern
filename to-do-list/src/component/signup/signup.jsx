import React, { useState } from 'react'
import "./signup.css";
import HeadingComp from './headingComp';

import axios from "axios";

const Signup = () => {

    const [ input, setInput ] = useState({"email": "", username: "", password: "" });

    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/register", input).then((response) => {
            console.log(response);
            setInput({email: "", username: "", password: "" });
        });
        
    }

  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column w-100 p-5">
                        <input className='p-2 my-3 input-signup' type="email" name='email' placeholder='Enter Your Email' onChange={change} value={input.email} />
                        <input className='p-2 my-3 input-signup' type="username" name='username' placeholder='Enter Your Username' onChange={change} value={input.username} />
                        <input className='p-2 my-3 input-signup' type="password" name='password' placeholder='Enter Your Password' onChange={change} value={input.password} />
                        <button className='btn-signup p-2' onClick={submit}>SignUp</button>
                    </div>
                </div>
                <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                    <HeadingComp first="Sign" second="Up" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
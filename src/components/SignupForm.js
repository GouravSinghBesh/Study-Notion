import React from 'react'
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "",confirmPassword : "" });

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword , setConfirmPassword] = useState(false);
    const [accountType , setAccountType] = useState("student");
    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.password  !== formData.confirmPassword){
            toast.error("Password don't match");
            return;
        }

        toast.success("Signup SuccessFully");
        navigate("/dashboard");
        setIsLoggedIn(true);
        const finalData = {
            ...formData,
            accountType
        }
        console.log(finalData);
    }
    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 mt-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                 onClick={()=> setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} 
                onClick={()=> setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-4 ">
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup  className='text-pink-200'>*</sup></p>
                        <input type='text' placeholder='Enter First Name' onChange={changeHandler} name='firstName' value={formData.firstName} 
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        ></input>
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup  className='text-pink-200'>*</sup></p>
                        <input type='text' placeholder='Enter Last Name' onChange={changeHandler} name='lastName' value={formData.lastName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        ></input>
                    </label>
                </div>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup  className='text-pink-200'>*</sup></p>
                    <input required type='email' placeholder='Enter your Email Adderess' name='email' value={formData.email} onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    ></input>
                </label>

                <div className='flex gap-x-4 mt-[5px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup  className='text-pink-200'>*</sup></p>
                        <input type={showPassword ? ("text") : ("password")} placeholder='enter Password' onChange={changeHandler} name='password' value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        ></input>
                        <span  className='absolute right-3 top-[38px] cursor-pointer'
                         onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input type={confirmPassword ? ("text") : ("password")} placeholder='confirm Password' onChange={changeHandler} name='confirmPassword' value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        ></input>
                        <span  className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setConfirmPassword((prev) => !prev)}>
                            {confirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>

                <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] '>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm
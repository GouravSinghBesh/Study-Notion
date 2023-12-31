import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({ desc1, desc2, title, image,formtype,setIsLoggedIn }) => {
    return (
    <div  className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>

        <div  className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <div className='mt-4'>
                <p className='text-richblack-100'>{desc1}</p>
                <p  className='text-blue-100 italic'>{desc2}</p>
            </div>

            {
                formtype === "login" ? (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>) : (<SignupForm  setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <div className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <button>Sign In with Google</button>
            </div>
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frame}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"></img>
            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                ></img>
        </div>

    </div>
    )
}

export default Template;
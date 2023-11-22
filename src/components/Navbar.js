import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
    return (
        <div className='w-11/12 max-w-[1160px] py-4 mx-auto flex justify-between items-center'>

            <Link to="/">
                <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
            </Link>

            <nav>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {!isLoggedIn &&
                    <li>
                        <Link to="/login"><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button></Link>
                    </li>
                }
                {!isLoggedIn &&
                    <li>
                        <Link to="/signup"><button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button></Link>
                    </li>
                }
                {isLoggedIn &&
                    <li>
                        <Link to="/"><button
                        className='bg-richblack-800 text-richblack-100 py-[8px] 
                        px-[12px] rounded-[8px] border border-richblack-700'
                        onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logout successfully");
                        }}>LogOut</button></Link>
                    </li>
                }
                {isLoggedIn &&
                    <li>
                        <Link to="/dashboard"><button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button></Link>
                    </li>
                }

            </div>

        </div>
    )
}

export default Navbar
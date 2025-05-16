import logo from '../assets/logo.png'
import coin from '../assets/dollar.png'
import { useEffect, useState } from 'react'
export default function Nav({ freeCoin }) {
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        function controlNav() {
            setHasShadow(window.scrollY > 10)
        }
        window.addEventListener('scroll', controlNav)

        // return () => window.removeEventListener('scroll', controlNav);
    }, [])
    return (
        <>
            <div className={`navbar lg:h-23 bg-base-100 ${hasShadow? "shadow":""}`}>
                <div className="flex container mx-auto items-center">
                    <div className="flex-1 flex items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Team</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>
                        <a className="text-xl"><img className='lg:w-[110.16px] w-[75px]' src={logo} alt="" /></a>
                    </div>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#5a5a5a] text-[16px] gap-8">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Team</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <div className="px-3 py-2 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        <div className=''>
                            <p className='font-bold flex items-center gap-2'>
                                {freeCoin} Coin
                                <img className='w-[22px]' src={coin} alt="" />
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
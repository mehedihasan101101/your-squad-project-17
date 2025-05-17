import logo from '../assets/logo.png'
export default function Footer() {
    return (
        <>
            <div className="w-full container m-auto lg:mt-[-220px] md:mt-[-180px] mt-[-170px] ">

                <img className='pt-50 lg:w-70 md:w-60 w-50 m-auto' src={logo} alt="" />

                <div className='flex md:flex-row flex-col p-5 md:p-2 justify-between gap-10 mt-5 pb-10'>
                    <div className='space-y-2'>
                        <h5 className='text-white font-bold' >About Us</h5>
                        <p className='text-white/50 w-60'> We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-white font-bold'>Quick Links</h5>
                        <ul className='text-white/50 list-disc pl-4'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className=' space-y-2'>
                        <h5 className='text-white font-bold'>Subscribe</h5>
                        <p className='text-white/50 w-50'>Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex gap-2 w-full items-center justify-center">
                            <input type="text" placeholder="Enter your email" className="input w-full" />
                            <button className="btn px-6  bg-gradient-to-r from-violet-100 from-0% via-amber-500 via-100% to-yellow-500 to-100%">Subscribe</button>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )


}
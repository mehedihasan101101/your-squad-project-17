import bgShadow from '../assets/bg-shadow.png'
export default function SubToNewsLetterSec() {
    return (
        <>
            <div id='newsLetter' className=" border border-white   relative p-5 rounded-2xl  mt-10 z-40 ">
                <div className="flex flex-col bg-white shadow items-center justify-center  lg:py-30 py-20 lg:px-120 md:px-10 px-5 space-y-3  rounded-2xl bg-no-repeat lg:bg-cover bg-cover " style={{ backgroundImage : `url(${bgShadow})` }}>
                    <h1 className="md:text-[32px] text-[23px] font-bold ">Subscribe to our Newsletter</h1>
                    <p className="md:text-[20px] text-[15px] text-center">Get the latest updates and news right in your inbox</p>
                    <div className="flex gap-2 w-full items-center justify-center">
                        <input type="text" placeholder="Enter your email" className="input w-full" />
                        <button  className="btn px-6  bg-gradient-to-r from-violet-100 from-0% via-amber-500 via-100% to-yellow-500 to-100%">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )


}
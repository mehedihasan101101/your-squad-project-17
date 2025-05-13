import banner from '../assets/banner.png'
import bannerShadow from '../assets/hero-banner.jpg'
export default function HeroSection({addCredit}) {
    return (
        <>
            <div className=' p-2 flex flex-col justify-center items-center  bg-[#131313] rounded-xl bg-cover  space-y-3  bg-no-repeat
             lg:h-[730px] md:h-[600px] h-[500px] '
                style={{ backgroundImage: `url(${bannerShadow})` }}>
                <img className=' lg:h-[230px] md:h-[250px] h-[150px] ' src={banner} alt="" />
                <h1 className='lg:text-[40px] md:text-[33px] text-[22px] text-border font-extrabold text-white  text-center '>Assemble Your Ultimate Dream 11 Football Team</h1>
                <p className=' lg:text-[24px] md:text-[20px] text-[16px ] text-[#000000] '>Beyond Boundaries Beyond Limits</p>
                <button onClick={addCredit} className='cursor-pointer py-4 px-2 border rounded-xl border-[#E7FE29] ' ><a className='  rounded bg-[#E7FE29] py-3 px-5 font-bold '>Claim Free Credit</a></button>
            </div>

        </>
    )
}

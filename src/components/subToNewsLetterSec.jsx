export default function SubToNewsLetterSec() {
    return (
        <>
            <div className="border p-3 rounded-2xl bg-gradient-to-tr from-yellow-600 via-gray-50 to-amber-600">
                <div className="flex flex-col items-center justify-center py-30 px-120 space-y-3 border rounded-2xl">
                    <h1 className="text-[32px] font-bold ">Subscribe to our Newsletter</h1>
                    <p className="text-[20px]">Get the latest updates and news right in your inbox</p>
                    <div className="flex w-full items-center justify-center">
                        <input type="text" placeholder="Enter your email" className="input w-full" />
                        <button className="btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )


}
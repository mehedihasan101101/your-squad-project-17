import { MdDeleteForever } from "react-icons/md";

export default function SelectedPlyerCard({ SelectedPInfo }) {
    const { name, image, role } = SelectedPInfo;
    return (
        <>
            <div className="p-2 rounded-xl mt-3 flex items-center justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <div className="flex gap-5 items-center justify-center ">
                    <img className="w-25 h-23 rounded-xl" src={image} alt="Player Name" />
                    <div>
                        <h3 className=" font-bold text-xl ">{name}</h3>
                        <h4>{role}</h4>
                    </div>
                </div>
                <MdDeleteForever className=" text-red-500 text-3xl cursor-pointer"></MdDeleteForever>
            </div>

        </>
    )
}
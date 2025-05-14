import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { savePlayerToLs, verifySelectedPlayerList } from "../utilities/selected-player-ls";
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
export default function PlayerCard({ player, setSelectedPlayerId, freeCoin, selectedPlayerId }) {

    function addToSelectedList() {
        if (selectedPlayerId.includes(player.id)) {
            toast.warning(`${player.name} is already added to your team!`, { position: "top-center" })
        }
        else if (freeCoin >= player.price) {
            toast.success(`Congratulations! ${player.name} has been  in your team!`, {
                position: "top-center",
            })
            savePlayerToLs(player.id)
            let selectedPlayerList = verifySelectedPlayerList();
            setSelectedPlayerId(selectedPlayerList);
        }
        else {
            toast.warning("Action failed: Insufficient coins", { position: "top-center" })
        }

    }

    return (
        <>
            <div className=" space-y-2 rounded-xl p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <img className=" h-[250px] rounded-xl  w-full " src={player.image} alt="" />
                <div className="flex items-center gap-2">
                    <FaUser></FaUser>
                    <h3 className="mt-1 font-bold text-[19px]">{player.name}</h3>
                </div>
                <div className="flex items-center gap-2" >
                    <IoFlagSharp className="text-[#898989]"></IoFlagSharp>
                    <h3 className=" text-[#898989] ">{player.nationality}</h3>
                </div>
                <hr className="border-t-2 border-[#ece8e8]"></hr>
                <h4 className="font-bold">Rating</h4>
                <h4 className=" text-[#898989]">{player.role}</h4>
                <div className="flex items-center justify-between">
                    <h4 className=" text-[#898989]">Price: ${player.price}</h4>
                    <button onClick={addToSelectedList} className=" btn font-normal cursor-pointer  rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Choose Player</button>
                </div>


            </div>
        </>
    )
}

import { useEffect, useState } from "react";
import SelectedPlyerCard from "./selectedPlyerCard";

export default function SelectedPlayerContainer({ selectedPlayerId, players, btnAvalAble, setSelectedPlayerId, setFreeCoin, freeCoin }) {
    const [finalPlist, setFinalPlist] = useState([])
    useEffect(() => {
        let finaSelectedPlayerList = []

        selectedPlayerId.map(id => {
            let selectedPInfo = players.find(each => each.id == id);
            if (selectedPInfo) {
                finaSelectedPlayerList.push(selectedPInfo);
            }

        })
        setFinalPlist(finaSelectedPlayerList)


    }, [players, selectedPlayerId])

    function resetEverything() {
        freeCoin = 0;

        localStorage.setItem('freeCoin', freeCoin);
        setFreeCoin(freeCoin);
        selectedPlayerId.length = 0;
        localStorage.setItem("savedPlayer", JSON.stringify(selectedPlayerId))
        setSelectedPlayerId([])



    }

    return (
        <>
            <div className={`h-90 flex flex-col justify-center items-center bg-gray-100  rounded mt-5 ${selectedPlayerId.length == 0 ? "" : "hidden"} `}>
                <h1 className="font-bold text-2xl">"Your team has no players. Tap 'Add More Player' to begin."</h1>
            </div>

            {finalPlist.map(SelectedPInfo => <SelectedPlyerCard SelectedPInfo={SelectedPInfo} selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId}  ></SelectedPlyerCard>)}
            <div className="flex gap-3">
                <button onClick={btnAvalAble} className="mt-5 border-0 bg-[#E7FE29] btn font-normal cursor-pointer  rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Add More Player</button>
                <button onClick={resetEverything} className="mt-5 border-0 bg-[#E7FE29] text-black btn font-normal cursor-pointer  rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Reset</button>

            </div>
        </>
    )
}
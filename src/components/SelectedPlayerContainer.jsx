
import { useEffect, useState } from "react";
import SelectedPlyerCard from "./selectedPlyerCard";

export default function SelectedPlayerContainer({ selectedPlayerId, players, btnAvalAble }) {
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

    return (
        <>
            {finalPlist.map(SelectedPInfo => <SelectedPlyerCard SelectedPInfo={SelectedPInfo} ></SelectedPlyerCard>)}
            <button onClick={btnAvalAble} className=' mt-5 cursor-pointer py-4 px-2 border rounded-xl border-[#000000] ' ><a className='  rounded bg-[#E7FE29] py-3 px-5 font-bold '>Add More Player</a></button>
        </>
    )
}
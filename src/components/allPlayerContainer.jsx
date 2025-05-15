import { useEffect, useState } from "react"
import PlayerCard from "./playerCard"
import SelectedPlayerContainer from "./SelectedPlayerContainer"
import { verifySelectedPlayerList } from "../utilities/selected-player-ls"

export default function AllPlayerContainer({ freeCoin,setFreeCoin }) {


    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('/your-squad-project-17/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    useEffect(() => {
        let selectedPlayerList = verifySelectedPlayerList();
        setSelectedPlayerId(selectedPlayerList)
    }, [])
    
    const [isClicked, setIsClicked] = useState(true);
    function btnAvalAble() {

        setIsClicked(true)
    }
    function btnSelected() {

        setIsClicked(false)
    }

    const [selectedPlayerId, setSelectedPlayerId] = useState([]);

    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className=" font-bold md:text-2xl ">{isClicked== true?"Available Player" : `Selected Player (${selectedPlayerId.length}/11) `}</h3>
                <div className="h-full  w-fit rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
                    <button onClick={btnAvalAble} className={`rounded-tl-lg rounded-bl-lg  py-2 px-5 cursor-pointer md:text-[18px] text-[12px]
                    ${isClicked == true ? "bg-[#E7FE29]" : ""}`}  >Available</button>
                    <button onClick={btnSelected} className={`rounded-tr-lg rounded-br-lg  py-2 px-5 cursor-pointer md:text-[18px] text-[12px]
                        ${isClicked == false ? "bg-[#E7FE29]" : ""}`} >Selected ({selectedPlayerId.length})</button>
                </div>
            </div>
            <div className={` mt-6 grid lg:grid-cols-4 md:grid-cols-2 gap-2 ${isClicked == true ? "" : "hidden"}`}>
                {players.map(player => <PlayerCard selectedPlayerId={selectedPlayerId} freeCoin={freeCoin} setFreeCoin={setFreeCoin} player={player} setSelectedPlayerId={setSelectedPlayerId} ></PlayerCard>)}
            </div>
            <div className={isClicked == false ? "" : "hidden"} >
                <SelectedPlayerContainer  btnAvalAble={btnAvalAble} selectedPlayerId={selectedPlayerId} players={players}></SelectedPlayerContainer>
            </div>


        </>
    )
}
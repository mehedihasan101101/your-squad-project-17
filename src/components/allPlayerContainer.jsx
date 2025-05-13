import { useEffect, useState } from "react"
import PlayerCard from "./playerCard"
import SelectedCard from "./selectredCard"

export default function AllPlayerContainer() {


    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('/your-squad-project-17/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
   
    const [isClicked, setIsClicked] = useState(true);
    function btnAvalAble() {

        setIsClicked(true)
    }
    function btnSelected() {

        setIsClicked(false)
    }
 
    
    const  [selectedPlayer,setSelectedPlayer] = useState([]);
    console.log(selectedPlayer)
    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className=" font-bold text-2xl ">Available Players</h3>
                <div className="h-full  w-fit rounded-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
                    <button onClick={btnAvalAble} className={`rounded-tl-lg rounded-bl-lg  py-2 px-5 cursor-pointer
                    ${isClicked == true ? "bg-[#E7FE29]" : ""}`}  >Available</button>
                    <button onClick={btnSelected} className={`rounded-tr-lg rounded-br-lg  py-2 px-5 cursor-pointer
                        ${isClicked == false ? "bg-[#E7FE29]" : ""}`} >Selected</button>
                </div>
            </div>
            <div className={` mt-6 grid lg:grid-cols-4 md:grid-cols-2 gap-2 ${isClicked == true ? "" : "hidden"}`}>
                {players.map(player => <PlayerCard player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} ></PlayerCard>)}
            </div>
            <div className={isClicked == false ? "" : "hidden"} >
                <SelectedCard></SelectedCard>
            </div>


        </>
    )
}
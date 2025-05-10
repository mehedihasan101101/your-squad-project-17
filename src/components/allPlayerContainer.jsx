import { useEffect, useState } from "react"

export default function AllPlayerContainer() {
    const [players,setPlayers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5173/your-squad-project-17/allPlayers.json')
        .then (res=> res.json())
        .then (data=> setPlayers(data))
        
    },[])
    console.log(players)
    return (
        <>
           {players.map(player => <img src={player.image} alt="" /> )}
        </>
    )
}
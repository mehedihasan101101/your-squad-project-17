
import { useEffect, useState } from "react";
import SelectedPlyerCard from "./selectedPlyerCard";

export default function SelectedPlayerContainer({ selectedPlayerId, players }) {
    const [final, setFinal] = useState([])
    useEffect(() => {
        let finalS = []

        selectedPlayerId.map(id => {
            let hisamari = players.find(each => each.id == id);
            if (hisamari) {
                finalS.push(hisamari);
            }

        })
        setFinal(finalS)


    }, [players, selectedPlayerId])
  
    return (
        <>
            {final.map(f => <SelectedPlyerCard f={f} ></SelectedPlyerCard>)}
        </>
    )
}
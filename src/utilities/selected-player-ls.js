function verifySelectedPlayerList() {
    const getPlayerList = localStorage.getItem("savedPlayer");
    if (getPlayerList) {
        return JSON.parse(getPlayerList);
    }
    return [];
}

function savePlayerToLs(id) {
    let existingPlayers = verifySelectedPlayerList();
    existingPlayers.push(id);
    localStorage.setItem("savedPlayer", JSON.stringify(existingPlayers))
}

export {verifySelectedPlayerList,savePlayerToLs}
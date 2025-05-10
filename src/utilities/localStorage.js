function verifyCoinLs(){
    const getStoredItem = localStorage.getItem("freeCoin");
    if(getStoredItem){
        return getStoredItem;
    }
    return 0;
}
function setCoinLs(coin){
    let finalCoin = verifyCoinLs();
    finalCoin = coin;
    localStorage.setItem('freeCoin', finalCoin)

}

export {verifyCoinLs,setCoinLs}
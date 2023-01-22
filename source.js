const ADD_AMOUNT = 1;
const BUY_AMOUNT = 2;
const BID_AMOUNT = 1;

let playersCurrency = [2, 2, 2, 2];

let buttonsContainerList = document.getElementsByClassName("buttonsContainer");
let playerIndex = 0;
Array.from(buttonsContainerList).forEach((buttonsContainer) => {
    let index = playerIndex;
    buttonsContainer.getElementsByClassName("button_add")[0].onclick = () => {
        AddCurrency(index, ADD_AMOUNT);
    };
    buttonsContainer.getElementsByClassName("button_buy")[0].onclick = () => {
        RemoveCurrency(index, BUY_AMOUNT);
    };
    buttonsContainer.getElementsByClassName("button_sell")[0].onclick = () => {
        RemoveCurrency(index, BID_AMOUNT);
    };

    RefreshCurrency(playerIndex);

    playerIndex++;
});

function AddCurrency(playerIndex, amount){
    playersCurrency[playerIndex] += amount;
    
    RefreshCurrency(playerIndex);
}

function RemoveCurrency(playerIndex, amount){
    playersCurrency[playerIndex] -= amount;
    playersCurrency[playerIndex] < 0 && (playersCurrency[playerIndex] = 0);

    RefreshCurrency(playerIndex);
}

function RefreshCurrency(playerIndex){
    document.getElementById(`player${playerIndex+1}_currency`).innerHTML = playersCurrency[playerIndex];
}
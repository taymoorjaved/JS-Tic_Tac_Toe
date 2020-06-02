
const gameProcessing = (event) =>{
    let Player = 1;
    let Win = false;
    allBoxes = document.querySelectorAll(".inner-box");
    showMessage = document.querySelector(".current-message");
    winDiv = document.querySelector(".win-div");
    winmessage = document.querySelector(".win-message");
    showMessage.innerHTML = `${firstPlayer}'s Turn`;
    
    for( let i=0; i< allBoxes.length; i++){
        allBoxes[i].addEventListener('click', function(e){
                myCurrentEvent = e.currentTarget;
            if(Player === 1 && myCurrentEvent.innerText === "" && Win === false){
                    myCurrentEvent.innerHTML = "X";
                    myCurrentEvent.style.fontSize = "120px";
                    myCurrentEvent.style.color = "red";
                    Player--;
                    showMessage.innerHTML = `${secondPlayer}'s Turn`;
                }
            if (myCurrentEvent.innerText === "" && Win === false){
                    myCurrentEvent.innerHTML = "0";
                    myCurrentEvent.style.fontSize = "120px";
                    myCurrentEvent.style.color = "green";
                    Player++;
                    showMessage.innerHTML = `${firstPlayer}'s Turn`;
                }
            
            // checks for win for "X"    
            if(allBoxes[0].innerText === "X" && allBoxes[1].innerText === "X" && allBoxes[2].innerText === "X"){
                Win = true;
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if(allBoxes[3].innerText === "X" && allBoxes[4].innerText === "X" && allBoxes[5].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if(allBoxes[6].innerText === "X" && allBoxes[7].innerText === "X" && allBoxes[8].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if(allBoxes[0].innerText === "X" && allBoxes[4].innerText === "X" && allBoxes[8].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if(allBoxes[2].innerText === "X" && allBoxes[4].innerText === "X" && allBoxes[6].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if (allBoxes[0].innerText === "X" && allBoxes[3].innerText === "X" && allBoxes[6].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if (allBoxes[1].innerText === "X" && allBoxes[4].innerText === "X" && allBoxes[7].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }

            if (allBoxes[2].innerText === "X" && allBoxes[5].innerText === "X" && allBoxes[8].innerText === "X") {
                winDiv.style.display = "block";
                winmessage.innerText = `${firstPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${firstPlayer} Wins 😋`;
                console.log(`${firstPlayer} wins`);
            }



            // checks for win for "0"    
            if (allBoxes[0].innerText === "0" && allBoxes[1].innerText === "0" && allBoxes[2].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[3].innerText === "0" && allBoxes[4].innerText === "0" && allBoxes[5].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[6].innerText === "0" && allBoxes[7].innerText === "0" && allBoxes[8].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[0].innerText === "0" && allBoxes[4].innerText === "0" && allBoxes[8].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[2].innerText === "0" && allBoxes[4].innerText === "0" && allBoxes[6].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[0].innerText === "0" && allBoxes[3].innerText === "0" && allBoxes[6].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[1].innerText === "0" && allBoxes[4].innerText === "0" && allBoxes[7].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }

            if (allBoxes[2].innerText === "0" && allBoxes[5].innerText === "0" && allBoxes[8].innerText === "0") {
                winDiv.style.display = "block";
                winmessage.innerText = `${secondPlayer} Wins 😋`;
                Win = true;
                showMessage.innerHTML = `${secondPlayer} Wins 😋`;
                console.log(`${secondPlayer} wins`);
            }


            let fillCount = 0;
            for(let i=0; i< allBoxes.length; i++){
                if(allBoxes[i].innerText.trim() !== ""){
                    fillCount++;
                }
            }
        
            if(fillCount === 9){
                winDiv.style.display = "block";
                winmessage.innerText = `Game Drawn 😋`;
                Win = true;
                showMessage.innerHTML = `Game Drawn 😋`;
                console.log(`Game Drawn`);
            }
            
        })
    }
}

const nextsection= () =>{
    firstPlayer = document.querySelector("#first-player").value;
    secondPlayer = document.querySelector("#second-player").value;
    secondSection = document.querySelector(".second-section");
    firstSection = document.querySelector(".first-section");
    errorMessage = document.querySelector(".error");


    if(firstPlayer !== ""){
        if(secondPlayer !== ""){
        firstSection.style.display = "none";
        secondSection.style.display = "block";
        gameProcessing(event);
        }
        else{
            errorMessage.innerText = "Enter Second Player Name";
        }
    }
    else{
            errorMessage.innerText = "Enter first Player Name";
    }
    
    

}

window.onkeyup = function(e){
    if (e.keyCode === 13){
        nextsection();
    }

}
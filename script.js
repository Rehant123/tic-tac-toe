const gameContainer = document.querySelector("#cellContainer");

const grid = ["","","","","","","","",""];

function render(){
    grid.forEach((element, index) => {
        console.log("hey");
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = index;
       gameContainer.append(square);
        });
}
render();

let roundwon = false;

//bro code
const cells = document.querySelectorAll(".square");
const statusText = document.querySelector("#statusText");
const restartbtn = document.querySelector("#restartBtn");
let winning_condition = 
[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
 

let currentPlayer = "X"
// option== grid
let running =true;
function initializegame(){
   running = true;
    console.log("Game initialized");
    cells.forEach(cell=>{
        cell.addEventListener("click",cellclicked);
    })
    restartbtn.addEventListener("click",restartGame);
    statusText.textContent =`${currentPlayer} Turn`
    
}

function cellclicked(e){
 
    const cellIndex = e.target.id;
    console.log("cellindex")
    console.log(cellIndex);
    console.log(grid[cellIndex]);
    if(grid[cellIndex] == "X"||grid[cellIndex] == "O"  || !running){
        return;
    }
 

    updatecell(e,cellIndex)

    changePlayer();

    checkWinner();
    


}
function updatecell(e,cellIndex){
    console.log("updatecell called");
    
    grid[cellIndex] = currentPlayer;

    console.log(grid[cellIndex]);
    e.target.textContent = currentPlayer;

   

}

function changePlayer(){
    currentPlayer = (currentPlayer =="X")?"O":"X";
    statusText.textContent =`${currentPlayer} Turn`
}
function checkWinner(){
    let roundwon = false;
    console.log(grid);
    for(let i = 0;i<winning_condition.length;i++){
        const condition =winning_condition[i];
        console.log(condition);
       const cellA = grid[condition[0]];
       const cellB = grid[condition[1]];
       const cellC = grid[condition[2]];
    //    console.log(cellA,cellB,cellC);
//        if(cellA == ""|| cellB == ""|| cellC == ""){
//         console.log("keep goimg");
//        }
//        else if(cellA == cellB == cellC){
// alert("you won")
//        }
//        else{
//         console.log('keep going');
//        }
if(cellA == cellB&& cellB == cellC && cellA!=""){
    roundwon = true;
    //condition to check if any of the three condition match
}
else{
    //else continue
    continue;
}
//
if(roundwon == true){
    statusText.textContent =`${cellA} is the winner`
    openWinModal(cellA);
    running = false;
}
if(!grid.includes("")){
    console.log("its a draw");
    openWinModal("Draw");
    running = false;
}
    }
}
function restartGame(){
    console.log("its a restart clicked");
    currentPlayer = "X";
const grid = ["","","","","","","","",""];

initializegame();

}


//dark mode
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }


//modal

  var winModal = document.getElementById("winModal");
  var winModalParagraph = document.querySelector("#winModal p");
  console.log(winModalParagraph);
  var btnrestart = document.querySelector("#modal-close-button")
  
// Get the button that closes the modal
var modalCloseButton = document.getElementById("modal-close-button");

// When the user wins the game, open the modal
function openWinModal(A) {
  winModal.classList.add("show");
  if(A == "X"||A == "O"){
    winModalParagraph.textContent = `Congratulations ${A} on winning the game `;

  }

  else{
    winModalParagraph.textContent = `It's a draw`;

  }

restartGame();

}

// When the user clicks on the close button, close the modal



initializegame();

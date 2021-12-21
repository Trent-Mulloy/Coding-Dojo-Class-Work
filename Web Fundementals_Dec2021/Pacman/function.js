
// var c = Math.floor(Math.random())* 3;

var world = [

    [0,9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [7,0,8,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,6,0,0,2,1,2,2,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,0,2,2,1,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,11,0,0,2,1,2,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,2,2,1,1,1,2,1,2,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,1,2,2,1,2,1,1,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,5,1,1,1,2,2,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

var pacloc = [19,12];
var redloc = [10,14];
var blueloc = [10,13]

setInterval(redGhostMove, 100);
setInterval(blueGhostMove, 100);

// function displayWorldPac()[
//     pacloc[0][1]
// ]

// var z = world[0];
// var t = world[1]
var p = 0

function displayWorld(){
    var output = "";
    
    for (var x=0; x<world.length; x++){
        output += "\n <div class='row'>";
        for (var y=0; y<world.length; y++){
            // if (world [x][x] == c)
            //     c = Math.floor(Math.random())* 3;


            var id = `x${x}y${y}`;

            if(world[x][y] == 2)
                output += `\n\t <div id="${id}" class='brick'></div>`;
            else if (world[x][y] == 22)
                output += `\n\t <p id="p1" class="scoreBoard">${p}</p>`;
             else if (world[x][y] == 1)
                output += `\n\t <div id="${id}" class="coin"></div>`;
            else if (world[x][y] == 0)
                output += `\n\t <div id="${id}" class="empty"></div>`;
            else if (world[x][y] == 5)
                output += `\n\t <div id="${id}" class="pacMan" id=pacMan></div>`;
            else if (world[x][y] == 9)
                output += `\n\t <button id="${id}" class="up" onclick=(upwards())></button>`;
            else if (world[x][y] == 7)
                output += `\n\t <button id="${id}" class="left" onclick=(left())></button>`;
            else if (world[x][y] == 6)
                output += `\n\t <button id="${id}" class="down" onclick=(down())></button>`;
            else if (world[x][y] == 8)
                output += `\n\t <button id="${id}" class="right" onclick=(right())></button>`;
            else if (world[x][y] == 10)
                output += `\n\t <div id="${id}" class="pinkGhost"></div>`;
            else if (world[x][y] == 11)
                output += `\n\t <div id="${id}" class="blueGhost"></div>`;
            }
        output += "\n</div>";
    }
    // console.log (output);
    document.getElementById("world").innerHTML = output;
};
function scoreBoard(){
    p = (p + 10);
document.getElementById("p1").innerHTML = (p);
if (p == 2270){
    window.alert("NextLevel");
    displayWorld2();
}
else if (p == 4530){
    window.alert("Winner!!");
    document. location. reload();
}
 
}
function upwards() {
    // document.querySelector("#pacMan").style.transform = "rotate(90deg)";
    var upwardsValue = world[pacloc[0]-1][pacloc[1]]
        if (upwardsValue == 2){
            console.log ("Thats a no");
        }
        else if (upwardsValue == 1){
            console.log ("coin");
           world[pacloc[0]][pacloc[1]] = 0;
           world[pacloc[0]-1][pacloc[1]] = 5;
           pacloc[0] -= 1;
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = [pacloc[0]+1,pacloc[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else {
            world[pacloc[0]][pacloc[1]] = 0;
           world[pacloc[0]-1][pacloc[1]] = 5;
           pacloc[0] -= 1;
        
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = [pacloc[0]+1,pacloc[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        }
}
function down() {
    var downwardsValue = world[pacloc[0]+1][pacloc[1]]
        if (downwardsValue == 2){
            console.log ("Thats a no");
        }
        else if (downwardsValue == 1){
           console.log ("yep");
           
           world[pacloc[0]][pacloc[1]] = 0;
           world[pacloc[0]+1][pacloc[1]] = 5;
           pacloc[0] += 1;
        
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = [pacloc[0]-1,pacloc[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world[pacloc[0]][pacloc[1]] = 0;
            world[pacloc[0]+1][pacloc[1]] = 5;
            pacloc[0] += 1;
         
         var newPacLocation = [pacloc[0],pacloc[1]];
         var oldPacLocation = [pacloc[0]-1,pacloc[1]];
         var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}
function left() {
    var leftwardsValue = world[pacloc[0]][pacloc[1]-1]
        if (leftwardsValue == 2){
            console.log ("Thats a no");
        }
        else if (leftwardsValue == 1){
           console.log ("yep");
           
           world[pacloc[0]][pacloc[1]] = 0;
           world[pacloc[0]][pacloc[1]-1] = 5;
           pacloc[1] -= 1;
        // change pacloc to new location
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = [pacloc[0],pacloc[1]+1];
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world[pacloc[0]][pacloc[1]] = 0;
            world[pacloc[0]][pacloc[1]-1] = 5;
            pacloc[1] -= 1;
         // change pacloc to new location
         var newPacLocation = [pacloc[0],pacloc[1]];
         var oldPacLocation = [pacloc[0],pacloc[1]+1];
         var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}
function right() {
    var rightwardsValue = world[pacloc[0]][pacloc[1]+1]
        if (rightwardsValue == 2){
            console.log ("Thats a no");
        }
        else if (rightwardsValue == 1){
           console.log ("yep");
           
           world[pacloc[0]][pacloc[1]] = 0;
           world[pacloc[0]][pacloc[1]+1] = 5;
           pacloc[1] += 1;
        // change pacloc to new location
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = [pacloc[0],pacloc[1]-1];
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world[pacloc[0]][pacloc[1]] = 0;
            world[pacloc[0]][pacloc[1]+1] = 5;
            pacloc[1] += 1;
         // change pacloc to new location
         var newPacLocation = [pacloc[0],pacloc[1]];
         var oldPacLocation = [pacloc[0],pacloc[1]-1];
         var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}

// onkeydown (ev;KeyboardEvent)
//for redGhost using redloc



function redGhostMove(){
    // var redMove = [upwardsr(), rightR(), downr(), leftr()];
        // console.log("executing ghost move");
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr();
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightR();
        }
        else if (num == 2){
            downr();
        }
        else {
            leftr();
        }
        
}
    

function upwardsr() {
    var upwardsValuer = world[redloc[0]-1][redloc[1]]
        if (upwardsValuer == 2){
            // console.log ("Thats a no");
        }
        // else if (upwardsValuer == 5){
        //     redloc[0]=10
        // }
        
        else if (upwardsValuer == 0){
        //    console.log ("yep");
           
           world[redloc[0]][redloc[1]] = 0;
           world[redloc[0]-1][redloc[1]] = 10;
           redloc[0] -= 1;
        // change pacloc to new location
        var newRedLocation = [redloc[0],redloc[1]];
        var oldRedLocation = [redloc[0]+1,redloc[1]];
        var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (upwardsValuer == 1){
            // console.log ("yep");
            
            world[redloc[0]][redloc[1]] = 1;
            world[redloc[0]-1][redloc[1]] = 10;
            redloc[0] -= 1;
         // change pacloc to new location
         var newRedLocation = [redloc[0],redloc[1]];
         var oldRedLocation = [redloc[0]+1,redloc[1]];
         var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(upwardsValuer == 5){
             window.alert("GameOver")
             document. location. reload()
         }
}

function rightR() {
    var rightwardsValuer = world[redloc[0]][redloc[1]+1]
        if (rightwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if (rightwardsValuer == 0){
        //    console.log ("yep");
           
           world[redloc[0]][redloc[1]] = 0;
           world[redloc[0]][redloc[1]+1] = 10;
           redloc[1] += 1;
        // change pacloc to new location
        var newRedLocation = [redloc[0],redloc[1]];
        var oldRedLocation = [redloc[0],redloc[1]-1];
        var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (rightwardsValuer == 1){
            // console.log ("yep");
            
            world[redloc[0]][redloc[1]] = 1;
            world[redloc[0]][redloc[1]+1] = 10;
            redloc[1] += 1;
         // change pacloc to new location
         var newRedLocation = [redloc[0],redloc[1]];
         var oldRedLocation = [redloc[0],redloc[1]-1];
         var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(rightwardsValuer == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function downr() {
    var downwardsValuer = world[redloc[0]+1][redloc[1]]
        if (downwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if (downwardsValuer == 0){
        //    console.log ("yep");
        //    pacloc = [19,12];
           world[redloc[0]][redloc[1]] = 0;
           world[redloc[0]+1][redloc[1]] = 10;
           redloc[0] += 1;
        // change pacloc to new location
        var newRedLocation = [redloc[0],redloc[1]];
        var oldRedLocation = [redloc[0]-1,redloc[1]];
        var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (downwardsValuer == 1){
            // console.log ("yep");
         //    pacloc = [19,12];
            world[redloc[0]][redloc[1]] = 1;
            world[redloc[0]+1][redloc[1]] = 10;
            redloc[0] += 1;
         // change pacloc to new location
         var newRedLocation = [redloc[0],redloc[1]];
         var oldRedLocation = [redloc[0]-1,redloc[1]];
         var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(downwardsValuer == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function leftr() {
    var leftwardsValuer = world[redloc[0]][redloc[1]-1]
        if (leftwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if (leftwardsValuer == 0){
        //    console.log ("yep");
           
           world[redloc[0]][redloc[1]] = 0;
           world[redloc[0]][redloc[1]-1] = 10;
           redloc[1] -= 1;
        // change pacloc to new location
        var newRedLocation = [redloc[0],redloc[1]];
        var oldRedLocation = [redloc[0],redloc[1]+1];
        var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (leftwardsValuer == 1){
            // console.log ("yep");
            
            world[redloc[0]][redloc[1]] = 1;
            world[redloc[0]][redloc[1]-1] = 10;
            redloc[1] -= 1;
         // change pacloc to new location
         var newRedLocation = [redloc[0],redloc[1]];
         var oldRedLocation = [redloc[0],redloc[1]+1];
         var oldCell = document.querySelector(`#x${oldRedLocation[0]}y${oldRedLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation[0]}y${newRedLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(leftwardsValuer == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function blueGhostMove(){
    // var redMove = [upwardsr(), rightR(), downr(), leftr()];
        // console.log("executing ghost move");
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsB();
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightB();
        }
        else if (num == 2){
            downB();
        }
        else {
            leftB();
        }
        
}
    

function upwardsB() {
    var upwardsValueB = world[blueloc[0]-1][blueloc[1]]
        if (upwardsValueB == 2){
            // console.log ("Thats a no");
        }
        // else if (upwardsValuer == 5){
        //     redloc[0]=10
        // }
        
        else if (upwardsValueB == 0){
        //    console.log ("yep");
           
           world[blueloc[0]][blueloc[1]] = 0;
           world[blueloc[0]-1][blueloc[1]] = 11;
           blueloc[0] -= 1;
        // change pacloc to new location
        var newBlueLocation = [blueloc[0],blueloc[1]];
        var oldBlueLocation = [blueloc[0]+1,blueloc[1]];
        var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        
        }
        else if (upwardsValueB == 1){
            // console.log ("yep");
            
            world[blueloc[0]][blueloc[1]] = 1;
            world[blueloc[0]-1][blueloc[1]] = 11;
            blueloc[0] -= 1;
         // change pacloc to new location
         var newBlueLocation = [blueloc[0],blueloc[1]];
         var oldBlueLocation = [blueloc[0]+1,blueloc[1]];
         var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(upwardsValueB == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}

function rightB() {
    var rightwardsValueB = world[blueloc[0]][blueloc[1]+1]
        if (rightwardsValueB == 2){
            // console.log ("Thats a no");
        }
        else if (rightwardsValueB == 0){
        //    console.log ("yep");
           
           world[blueloc[0]][blueloc[1]] = 0;
           world[blueloc[0]][blueloc[1]+1] = 11;
           blueloc[1] += 1;
        // change pacloc to new location
        var newBlueLocation = [blueloc[0],blueloc[1]];
        var oldBlueLocation = [blueloc[0],blueloc[1]-1];
        var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (rightwardsValueB == 1){
            // console.log ("yep");
            
            world[blueloc[0]][blueloc[1]] = 1;
            world[blueloc[0]][blueloc[1]+1] = 11;
            blueloc[1] += 1;
         // change pacloc to new location
         var newBlueLocation = [blueloc[0],blueloc[1]];
         var oldBlueLocation = [blueloc[0],blueloc[1]-1];
         var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(rightwardsValueB == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function downB() {
    var downwardsValueB = world[blueloc[0]+1][blueloc[1]]
        if (downwardsValueB == 2){
            // console.log ("Thats a no");
        }
        else if (downwardsValueB == 0){
        //    console.log ("yep");
        //    pacloc = [19,12];
           world[blueloc[0]][blueloc[1]] = 0;
           world[blueloc[0]+1][blueloc[1]] = 11;
           blueloc[0] += 1;
        // change pacloc to new location
        var newBlueLocation = [blueloc[0],blueloc[1]];
        var oldBlueLocation = [blueloc[0]-1,blueloc[1]];
        var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (downwardsValueB == 1){
            // console.log ("yep");
         //    pacloc = [19,12];
            world[blueloc[0]][blueloc[1]] = 1;
            world[blueloc[0]+1][blueloc[1]] = 11;
            blueloc[0] += 1;
         // change pacloc to new location
         var newBlueLocation = [blueloc[0],blueloc[1]];
         var oldBlueLocation = [blueloc[0]-1,blueloc[1]];
         var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(downwardsValueB == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function leftB() {
    var leftwardsValueB = world[blueloc[0]][blueloc[1]-1]
        if (leftwardsValueB == 2){
            // console.log ("Thats a no");
        }
        else if (leftwardsValueB == 0){
        //    console.log ("yep");
           
           world[blueloc[0]][blueloc[1]] = 0;
           world[blueloc[0]][blueloc[1]-1] = 11;
           blueloc[1] -= 1;
        // change pacloc to new location
        var newBlueLocation = [blueloc[0],blueloc[1]];
        var oldBlueLocation = [blueloc[0],blueloc[1]+1];
        var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (leftwardsValueB == 1){
            // console.log ("yep");
            
            world[blueloc[0]][blueloc[1]] = 1;
            world[blueloc[0]][blueloc[1]-1] = 11;
            blueloc[1] -= 1;
         // change pacloc to new location
         var newBlueLocation = [blueloc[0],blueloc[1]];
         var oldBlueLocation = [blueloc[0],blueloc[1]+1];
         var oldCell = document.querySelector(`#x${oldBlueLocation[0]}y${oldBlueLocation[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation[0]}y${newBlueLocation[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(leftwardsValueB == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
var world2 = [

    [0,9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [7,0,8,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,6,0,0,2,1,2,2,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,1,1,2,2,2,2,2,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,0,2,2,1,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,2,2,1,1,1,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,1,2,2,1,2,1,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,5,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];  
    var pacloc2 = [19,19];
    var redloc2 = [10,14];
    var blueloc2 = [10,13];

function displayWorld2(){
    redloc = [8,14];
    blueloc = [8,13];
    
    var output = "";
    
    for (var x=0; x<world2.length; x++){
        output += "\n <div class='row'>";
        for (var y=0; y<world2.length; y++){
            // if (world [x][x] == c)
            //     c = Math.floor(Math.random())* 3;


            var id = `x${x}y${y}`;

            if(world2[x][y] == 2)
                output += `\n\t <div id="${id}" class='brick'></div>`;
            else if (world2[x][y] == 22)
                output += `\n\t <p id="p1" class="scoreBoard">${p}</p>`;
             else if (world2[x][y] == 1)
                output += `\n\t <div id="${id}" class="coin"></div>`;
            else if (world2[x][y] == 0)
                output += `\n\t <div id="${id}" class="empty"></div>`;
            else if (world2[x][y] == 5)
                output += `\n\t <div id="${id}" class="pacMan" id=pacMan></div>`;
            else if (world2[x][y] == 9)
                output += `\n\t <button id="${id}" class="up" onclick=(upwards2())></button>`;
            else if (world2[x][y] == 7)
                output += `\n\t <button id="${id}" class="left" onclick=(left2())></button>`;
            else if (world2[x][y] == 6)
                output += `\n\t <button id="${id}" class="down" onclick=(down2())></button>`;
            else if (world2[x][y] == 8)
                output += `\n\t <button id="${id}" class="right" onclick=(right2())></button>`;
            else if (world2[x][y] == 10)
                output += `\n\t <div id="${id}" class="pinkGhost"></div>`;
            else if (world2[x][y] == 11)
                output += `\n\t <div id="${id}" class="blueGhost"></div>`;
            }
        output += "\n</div>";
    }
    // console.log (output);
    document.getElementById("world").innerHTML = output;
};


function upwards2() {
    // document.querySelector("#pacMan").style.transform = "rotate(90deg)";
    var upwardsValue2 = world2[pacloc2[0]-1][pacloc2[1]]
        if (upwardsValue2 == 2){
            console.log ("Thats a no");
        }
        else if (upwardsValue2 == 1){
            console.log ("coin");
           world2[pacloc2[0]][pacloc2[1]] = 0;
           world2[pacloc2[0]-1][pacloc2[1]] = 5;
           pacloc2[0] -= 1;
        var newPacLocation2 = [pacloc2[0],pacloc2[1]];
        var oldPacLocation2 = [pacloc2[0]+1,pacloc2[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else {
            world[pacloc2[0]][pacloc2[1]] = 0;
           world[pacloc2[0]-1][pacloc2[1]] = 5;
           pacloc2[0] -= 1;
        
        var newPacLocation2 = [pacloc2[0],pacloc2[1]];
        var oldPacLocation2 = [pacloc2[0]+1,pacloc2[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        }
}
function down2() {
    var downwardsValue2 = world2[pacloc2[0]+1][pacloc2[1]]
        if (downwardsValue2 == 2){
            console.log ("Thats a no");
        }
        else if (downwardsValue2 == 1){
           console.log ("yep");
           
           world2[pacloc2[0]][pacloc2[1]] = 0;
           world2[pacloc2[0]+1][pacloc2[1]] = 5;
           pacloc2[0] += 1;
        
        var newPacLocation2 = [pacloc2[0],pacloc2[1]];
        var oldPacLocation2 = [pacloc2[0]-1,pacloc2[1]];
        var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world2[pacloc2[0]][pacloc2[1]] = 0;
            world2[pacloc2[0]+1][pacloc2[1]] = 5;
            pacloc2[0] += 1;
         
         var newPacLocation2 = [pacloc2[0],pacloc2[1]];
         var oldPacLocation2 = [pacloc2[0]-1,pacloc2[1]];
         var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}
function left2() {
    var leftwardsValue2 = world2[pacloc2[0]][pacloc2[1]-1]
        if (leftwardsValue2 == 2){
            console.log ("Thats a no");
        }
        else if (leftwardsValue2 == 1){
           console.log ("yep");
           
           world2[pacloc2[0]][pacloc2[1]] = 0;
           world2[pacloc2[0]][pacloc2[1]-1] = 5;
           pacloc2[1] -= 1;
        // change pacloc to new location
        var newPacLocation2 = [pacloc2[0],pacloc2[1]];
        var oldPacLocation2 = [pacloc2[0],pacloc2[1]+1];
        var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world2[pacloc2[0]][pacloc[21]] = 0;
            world2[pacloc2[0]][pacloc2[1]-1] = 5;
            pacloc2[1] -= 1;
         // change pacloc to new location
         var newPacLocation2 = [pacloc2[0],pacloc2[1]];
         var oldPacLocation2 = [pacloc2[0],pacloc2[1]+1];
         var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}
function right2() {
    var rightwardsValue2 = world2[pacloc2[0]][pacloc2[1]+1]
        if (rightwardsValue2 == 2){
            console.log ("Thats a no");
        }
        else if (rightwardsValue2 == 1){
           console.log ("yep");
           
           world2[pacloc2[0]][pacloc2[1]] = 0;
           world2[pacloc2[0]][pacloc2[1]+1] = 5;
           pacloc2[1] += 1;
        // change pacloc to new location
        var newPacLocation2 = [pacloc2[0],pacloc2[1]];
        var oldPacLocation2 = [pacloc2[0],pacloc2[1]-1];
        var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        scoreBoard()
        }
        else{
            console.log ("yep");
            
            world2[pacloc2[0]][pacloc2[1]] = 0;
            world2[pacloc2[0]][pacloc2[1]+1] = 5;
            pacloc2[1] += 1;
         // change pacloc to new location
         var newPacLocation2 = [pacloc2[0],pacloc2[1]];
         var oldPacLocation2 = [pacloc2[0],pacloc2[1]-1];
         var oldCell = document.querySelector(`#x${oldPacLocation2[0]}y${oldPacLocation2[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newPacLocation2[0]}y${newPacLocation2[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "empty");
         newCell.setAttribute("class","pacMan");
        }
}

// onkeydown (ev;KeyboardEvent)
//for redGhost using redloc



function redGhostMove2(){
    // var redMove = [upwardsr(), rightR(), downr(), leftr()];
        // console.log("executing ghost move");
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr2();
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightR2();
        }
        else if (num == 2){
            downr2();
        }
        else {
            leftr2();
        }
        
}
    

function upwardsr2() {
    var upwardsValuer2 = world2[redloc2[0]-1][redloc2[1]]
        if (upwardsValuer2 == 2){
            // console.log ("Thats a no");
        }
        // else if (upwardsValuer == 5){
        //     redloc[0]=10
        // }
        
        else if (upwardsValuer2 == 0){
        //    console.log ("yep");
           
           world2[redloc2[0]][redloc2[1]] = 0;
           world2[redloc2[0]-1][redloc2[1]] = 10;
           redloc2[0] -= 1;
        // change pacloc to new location
        var newRedLocation2 = [redloc2[0],redloc2[1]];
        var oldRedLocation2 = [redloc2[0]+1,redloc2[1]];
        var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (upwardsValuer2 == 1){
            // console.log ("yep");
            
            world2[redloc2[0]][redloc2[1]] = 1;
            world2[redloc[0]-1][redloc2[1]] = 10;
            redloc2[0] -= 1;
         // change pacloc to new location
         var newRedLocation2 = [redloc2[0],redloc2[1]];
         var oldRedLocation2 = [redloc2[0]+1,redloc2[1]];
         var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
         console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
         console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(upwardsValuer2 == 5){
             window.alert("GameOver")
             document. location. reload()
         }
}

function rightR2() {
    var rightwardsValuer2 = world2[redloc2[0]][redloc2[1]+1]
        if (rightwardsValuer2 == 2){
            // console.log ("Thats a no");
        }
        else if (rightwardsValuer2 == 0){
        //    console.log ("yep");
           
           world2[redloc2[0]][redloc2[1]] = 0;
           world2[redloc2[0]][redloc2[1]+1] = 10;
           redloc2[1] += 1;
        // change pacloc to new location
        var newRedLocation2 = [redloc2[0],redloc2[1]];
        var oldRedLocation2 = [redloc2[0],redloc2[1]-1];
        var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (rightwardsValuer2 == 1){
            // console.log ("yep");
            
            world2[redloc2[0]][redloc2[1]] = 1;
            world2[redloc2[0]][redloc2[1]+1] = 10;
            redloc2[1] += 1;
         // change pacloc to new location
         var newRedLocation2 = [redloc2[0],redloc2[1]];
         var oldRedLocation2 = [redloc2[0],redloc2[1]-1];
         var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(rightwardsValuer2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function downr2() {
    var downwardsValuer2 = world2[redloc2[0]+1][redloc2[1]]
        if (downwardsValuer2 == 2){
            // console.log ("Thats a no");
        }
        else if (downwardsValuer2 == 0){
        //    console.log ("yep");
        //    pacloc = [19,12];
           world2[redloc2[0]][redloc2[1]] = 0;
           world2[redloc2[0]+1][redloc2[1]] = 10;
           redloc2[0] += 1;
        // change pacloc to new location
        var newRedLocation2 = [redloc2[0],redloc2[1]];
        var oldRedLocation2 = [redloc2[0]-1,redloc2[1]];
        var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (downwardsValuer2 == 1){
            // console.log ("yep");
         //    pacloc = [19,12];
            world2[redloc2[0]][redloc2[1]] = 1;
            world2[redloc[0]+1][redloc2[1]] = 10;
            redloc2[0] += 1;
         // change pacloc to new location
         var newRedLocation2 = [redloc2[0],redloc2[1]];
         var oldRedLocation2 = [redloc2[0]-1,redloc2[1]];
         var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(downwardsValuer2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function leftr2() {
    var leftwardsValuer2 = world2[redloc2[0]][redloc2[1]-1]
        if (leftwardsValuer2 == 2){
            // console.log ("Thats a no");
        }
        else if (leftwardsValuer2 == 0){
        //    console.log ("yep");
           
           world2[redloc2[0]][redloc2[1]] = 0;
           world2[redloc2[0]][redloc2[1]-1] = 10;
           redloc2[1] -= 1;
        // change pacloc to new location
        var newRedLocation2 = [redloc2[0],redloc2[1]];
        var oldRedLocation2 = [redloc2[0],redloc2[1]+1];
        var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pinkGhost");
        }
        else if (leftwardsValuer2 == 1){
            // console.log ("yep");
            
            world2[redloc2[0]][redloc2[1]] = 1;
            world2[redloc2[0]][redloc2[1]-1] = 10;
            redloc2[1] -= 1;
         // change pacloc to new location
         var newRedLocation2 = [redloc2[0],redloc2[1]];
         var oldRedLocation2 = [redloc2[0],redloc2[1]+1];
         var oldCell = document.querySelector(`#x${oldRedLocation2[0]}y${oldRedLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newRedLocation2[0]}y${newRedLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","pinkGhost");
         }
         else if(leftwardsValuer2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function blueGhostMove2(){
    // var redMove = [upwardsr(), rightR(), downr(), leftr()];
        // console.log("executing ghost move");
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsB2();
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightB2();
        }
        else if (num == 2){
            downB2();
        }
        else {
            leftB2();
        }
        
}
    

function upwardsB2() {
    var upwardsValueB2 = world2[blueloc2[0]-1][blueloc2[1]]
        if (upwardsValueB2 == 2){
            // console.log ("Thats a no");
        }
        // else if (upwardsValuer == 5){
        //     redloc[0]=10
        // }
        
        else if (upwardsValueB2 == 0){
        //    console.log ("yep");
           
           world2[blueloc2[0]][blueloc2[1]] = 0;
           world[blueloc2[0]-1][blueloc2[1]] = 11;
           blueloc2[0] -= 1;
        // change pacloc to new location
        var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
        var oldBlueLocation2 = [blueloc2[0]+1,blueloc2[1]];
        var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        
        }
        else if (upwardsValueB2 == 1){
            // console.log ("yep");
            
            world2[blueloc2[0]][blueloc2[1]] = 1;
            world2[blueloc2[0]-1][blueloc2[1]] = 11;
            blueloc2[0] -= 1;
         // change pacloc to new location
         var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
         var oldBlueLocation2 = [blueloc2[0]+1,blueloc2[1]];
         var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(upwardsValueB2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}

function rightB2() {
    var rightwardsValueB2 = world2[blueloc2[0]][blueloc2[1]+1]
        if (rightwardsValueB2 == 2){
            // console.log ("Thats a no");
        }
        else if (rightwardsValueB2 == 0){
        //    console.log ("yep");
           
           world2[blueloc2[0]][blueloc2[1]] = 0;
           world2[blueloc2[0]][blueloc2[1]+1] = 11;
           blueloc[1] += 1;
        // change pacloc to new location
        var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
        var oldBlueLocation2 = [blueloc2[0],blueloc2[1]-1];
        var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (rightwardsValueB2 == 1){
            // console.log ("yep");
            
            world2[blueloc2[0]][blueloc2[1]] = 1;
            world2[blueloc2[0]][blueloc2[1]+1] = 11;
            blueloc2[1] += 1;
         // change pacloc to new location
         var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
         var oldBlueLocation2 = [blueloc2[0],blueloc2[1]-1];
         var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(rightwardsValueB2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function downB2() {
    var downwardsValueB2 = world2[blueloc2[0]+1][blueloc2[1]]
        if (downwardsValueB2 == 2){
            // console.log ("Thats a no");
        }
        else if (downwardsValueB2 == 0){
        //    console.log ("yep");
        //    pacloc = [19,12];
           world2[blueloc2[0]][blueloc2[1]] = 0;
           world2[blueloc2[0]+1][blueloc2[1]] = 11;
           blueloc2[0] += 1;
        // change pacloc to new location
        var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
        var oldBlueLocation2 = [blueloc2[0]-1,blueloc2[1]];
        var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (downwardsValueB2 == 1){
            // console.log ("yep");
         //    pacloc = [19,12];
            world2[blueloc2[0]][blueloc2[1]] = 1;
            world2[blueloc2[0]+1][blueloc2[1]] = 11;
            blueloc2[0] += 1;
         // change pacloc to new location
         var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
         var oldBlueLocation2 = [blueloc2[0]-1,blueloc2[1]];
         var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(downwardsValueB2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
function leftB2() {
    var leftwardsValueB2 = world2[blueloc2[0]][blueloc2[1]-1]
        if (leftwardsValueB2 == 2){
            // console.log ("Thats a no");
        }
        else if (leftwardsValueB == 0){
        //    console.log ("yep");
           
           world2[blueloc2[0]][blueloc2[1]] = 0;
           world2[blueloc2[0]][blueloc2[1]-1] = 11;
           blueloc2[1] -= 1;
        // change pacloc to new location
        var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
        var oldBlueLocation2 = [blueloc2[0],blueloc2[1]+1];
        var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation[21]}`);
        // console.log(newCell);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","blueGhost");
        }
        else if (leftwardsValueB2 == 1){
            // console.log ("yep");
            
            world2[blueloc2[0]][blueloc2[1]] = 1;
            world2[blueloc2[0]][blueloc2[1]-1] = 11;
            blueloc2[1] -= 1;
         // change pacloc to new location
         var newBlueLocation2 = [blueloc2[0],blueloc2[1]];
         var oldBlueLocation2 = [blueloc2[0],blueloc2[1]+1];
         var oldCell = document.querySelector(`#x${oldBlueLocation2[0]}y${oldBlueLocation2[1]}`);
        //  console.log(oldCell);
         var newCell = document.querySelector(`#x${newBlueLocation2[0]}y${newBlueLocation2[1]}`);
        //  console.log(newCell);
         oldCell.setAttribute("class", "coin");
         newCell.setAttribute("class","blueGhost");
         }
         else if(leftwardsValueB2 == 5){
            window.alert("GameOver")
            document. location. reload()
        }
}
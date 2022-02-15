
// var c = Math.floor(Math.random())* 3;
var current_rotation = 0;
function rotateright(i){
    // current_rotation += i;
document.getElementsByClassName("pacMan")[0].style.transform = 'rotate(' + i + 'deg)';
};

function keypresser(e){
    console.log(e)
    if (keypresscount <= 0){
    if (e.key == "w"){
        upwards();
        rotateright(-90);
        powercount--;
    }
    else if (e.key == "d"){
        right()
        rotateright(0)
        powercount--;
    }
    else if (e.key == "a"){
        left()
        rotateright(180)
        powercount--;
    }
    else if (e.key == "s"){
        down()
        rotateright(90)
        powercount--;
    }
    else if (e.key == "k"){
        powercount = 2260
    } keypresscount = 0.5;
    }
    else{
        keypresscount = 0;
    }
    window.requestAnimationFrame(keypresser);
}



window.addEventListener("keydown", keypresser)
var powercount = 0;
// function ChangeGhost(){
//     if (powercount > 0){
//         document.getElementsByClassName("pacMan")[0].style.backgroundImage = "url(assets/Blue1.png)";
//     }
// }

var world = [

    [0,9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [7,0,8,0,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,6,0,0,2,1,2,2,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,32,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,32,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,0,2,2,1,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,11,0,0,2,1,2,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,32,2,2,2,1,1,1,2,1,2,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,32,1,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,1,2,2,1,2,1,1,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,5,1,1,1,2,2,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,32,1,2,0,0,0,0],
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
var redcount = 8;
var bluecount = 8;
window.requestAnimationFrame(redGhostMove);
window.requestAnimationFrame(blueGhostMove);
window.requestAnimationFrame(keypresser);
var keypresscount = 0.5;
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
            else if (world[x][y] == 32)
                output += `\n\t <div id="${id}" class="powerpellet"></div>`;
            }
        output += "\n</div>";
    }
    // console.log (output);
    document.getElementById("world").innerHTML = output;
};
function scoreBoard(){
    p = (p + 10);
document.getElementById("p1").innerHTML = (p);
if (p == 2220){
    window.alert("Level 2"+"score="+p);
    displayWorld2();
}
else if (p == 4430){
    window.alert("Level 3"+"score="+p);
    displayWorld3();
}
else if (p == 6820){
    window.alert("Winner!!")
    document. location. reload()
}
 
}
function upwards() {
    // document.querySelector("#pacMan").style.transform = "rotate(90deg)";
    var upwardsValue = world[pacloc[0]-1][pacloc[1]]
        if (upwardsValue == 2){
            console.log ("Thats a no");
        }
        else if (upwardsValue == 32){
            powercount = 15;
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
        else if (upwardsValue == 10){
            if (powercount > 0){
                var oldghostLocation = [redloc[0],redloc[1]];
                    redloc = [10,13];
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
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
        else if (downwardsValue == 32){
            powercount = 15;
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
        else if (downwardsValue == 10){
            if (powercount > 0){
                var oldghostLocation = [redloc[0],redloc[1]];
                    redloc = [10,13];
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
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
        else if (leftwardsValue == 32){
            powercount = 15;
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
        else if (leftwardsValue == 10){
            if (powercount > 0){
                var oldghostLocation = [redloc[0],redloc[1]];
                    redloc = [10,13];
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
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
        else if (rightwardsValue == 32){
            powercount = 15;
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
        else if (rightwardsValue == 10){
            if (powercount > 0){
                var oldghostLocation = [redloc[0],redloc[1]];
                    redloc = [10,13];
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
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
    if (redcount == 0){ 
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr(redloc,"pinkGhost");
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightR(redloc,"pinkGhost");
        }
        else if (num == 2){
            downr(redloc,"pinkGhost");
        }
        else {
            leftr(redloc,"pinkGhost");
        }
        redcount = 8
    } 
    else{
        redcount--;
    }
        window.requestAnimationFrame(redGhostMove)
}
    

function upwardsr(ghostLoc,color) {
    var upwardsValuer = world[ghostLoc[0]-1][ghostLoc[1]]
        if (upwardsValuer == 2){
            // console.log ("Thats a no");
        }
        // else if (upwardsValuer == 5){
        //     ghostLoc[0]=10
        // }
        else if(upwardsValuer == 5){
            if (powercount > 0){
                document.getElementsByClassName("pinkGhost").style.background = "url (assets/Eat.Ghost.ico)"
                var oldghostLocation = [ghostLoc[0],ghostLoc[1]];
                    if (color == "pinkGhost"){
                    redloc = [10,13];
                }
                    else{
                    blueloc = [10,13]
                }
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
        // newCell.classList.add(color);
            }
            else {
            window.alert("GameOver")
            document. location. reload()
        }}
        
        else{
        //    console.log ("yep");
           
        //    world[ghostLoc[0]][ghostLoc[1]] = 0;
        //    world[ghostLoc[0]-1][ghostLoc[1]] = 10;
           ghostLoc[0] -= 1;
        // change pacloc to new location
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0]+1,ghostLoc[1]];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        console.log(newCell);
        if (powercount > 0){
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add("pacGhost");
        }
        else{
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add(color)
        }
    } 
}

function rightR(ghostLoc,color) {
    var rightwardsValuer = world[ghostLoc[0]][ghostLoc[1]+1]
        if (rightwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if(rightwardsValuer == 5){
            if (powercount > 0){
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]];
                if (color == "pinkGhost"){
                    redloc = [10,13];
                }
                else{
                    blueloc = [10,13]
                }
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
        // newCell.classList.add(color);
            }
            else {
            window.alert("GameOver")
            document. location. reload()
        }}
        else{
        //    console.log ("yep");
           
        //    world[ghostLoc[0]][ghostLoc[1]] = 0;
        //    world[ghostLoc[0]][ghostLoc[1]+1] = 10;
           ghostLoc[1] += 1;
        // change pacloc to new location
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]-1];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        console.log(newCell);
        if (powercount > 0){
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add("pacGhost");
        }
        else{
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add(color)
        }
        }
        
}
function downr(ghostLoc,color) {
    var downwardsValuer = world[ghostLoc[0]+1][ghostLoc[1]]
        if (downwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if(downwardsValuer == 5){
            if (powercount > 0){
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]];
                if (color == "pinkGhost"){
                    redloc = [10,13];
                }
                else{
                    blueloc = [10,13]
                }
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
            else {
            window.alert("GameOver")
            document. location. reload()
        }}
        else{
        //    console.log ("yep");
        //    pacloc = [19,12];
        //    world[ghostLoc[0]][ghostLoc[1]] = 0;
        //    world[ghostLoc[0]+1][ghostLoc[1]] = 10;
           ghostLoc[0] += 1;
        // change pacloc to new location
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0]-1,ghostLoc[1]];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        console.log(oldCell);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        console.log(newCell);
        if (powercount > 0){
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add("pacGhost");
        }
        else{
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add(color)
        }
        }
        
}
function leftr(ghostLoc,color) {
    var leftwardsValuer = world[ghostLoc[0]][ghostLoc[1]-1]
        if (leftwardsValuer == 2){
            // console.log ("Thats a no");
        }
        else if(leftwardsValuer == 5){
            if (powercount > 0){
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]];
                if (color = "pinkGhost"){
                    redloc = [10,13];
                }
                else{
                    blueloc = [10,13]
                }
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }
            else {
            window.alert("GameOver")
            document. location. reload()
        }}
        else{
        //    console.log ("yep");
           
        //    world[ghostLoc[0]][ghostLoc[1]] = 0;
        //    world[ghostLoc[0]][ghostLoc[1]-1] = 10;
           ghostLoc[1] -= 1;
        // change pacloc to new location
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]+1];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        // console.log(oldCell);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        // console.log(newCell);
        if (powercount > 0){
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add("pacGhost");
        }
        else{
            oldCell.classList.remove("pacGhost");
            oldCell.classList.remove(color)
            newCell.classList.add(color)
        }
        }
         
}
function blueGhostMove(){
    // var redMove = [upwardsr(), rightR(), downr(), leftr()];
        // console.log("executing ghost move");
    if (bluecount == 0){
        
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr(blueloc,"blueGhost");
        }
        // if (num === 1){
        //     upwardsr();
        // }
        else if (num == 1){
            rightR(blueloc,"blueGhost");
        }
        else if (num == 2){
            downr(blueloc,"blueGhost");
        }
        else {
            leftr(blueloc,"blueGhost");
        }
        bluecount = 8;
    }  
    else{
        bluecount--;
    } 
    window.requestAnimationFrame(blueGhostMove)   
}
    
var world2 = [

    [0,9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [7,0,8,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,6,0,0,2,1,2,2,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,32,2,0,0,0,0],
    [0,0,0,0,2,32,2,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,1,1,1,1,1,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,0,2,2,1,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,0,0,0,2,1,2,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,0,0,0,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,32,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,2,2,1,1,1,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,1,2,2,1,2,1,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,5,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,2,1,32,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];  

function displayWorld2(){
    redloc = [8,14];
    blueloc = [8,13];
    pacloc = [19,19];
    var output = "";
    world = world2;
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
                output += `\n\t <button id="${id}" class="up" onclick=(upwards2())></button>`;
            else if (world[x][y] == 7)
                output += `\n\t <button id="${id}" class="left" onclick=(left2())></button>`;
            else if (world[x][y] == 6)
                output += `\n\t <button id="${id}" class="down" onclick=(down2())></button>`;
            else if (world[x][y] == 8)
                output += `\n\t <button id="${id}" class="right" onclick=(right2())></button>`;
            else if (world[x][y] == 10)
                output += `\n\t <div id="${id}" class="pinkGhost"></div>`;
            else if (world[x][y] == 11)
                output += `\n\t <div id="${id}" class="blueGhost"></div>`;
            else if (world[x][y] == 32)
                output += `\n\t <div id="${id}" class="powerpellet"></div>`;
            }
        output += "\n</div>";
    }
    // console.log (output);
    document.getElementById("world").innerHTML = output;
};

var world3 = [

    [0,9,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [7,0,8,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,6,0,0,2,2,1,2,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,1,1,2,2,1,2,1,2,1,2,2,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,1,2,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,2,1,2,2,0,2,2,1,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,1,2,2,1,2,1,2,0,0,0,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,2,2,1,2,1,2,2,2,2,2,1,2,1,1,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,2,2,1,2,1,2,2,2,1,1,1,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,5,1,1,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,2,2,2,1,1,1,1,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,0,0,0,0],
    [0,0,0,0,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
    [0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];  

function displayWorld3(){
    redloc = [8,14];
    blueloc = [8,13];
    pacloc = [19,19];
    var output = "";
    world = world3;
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
                output += `\n\t <button id="${id}" class="up" onclick=(upwards2())></button>`;
            else if (world[x][y] == 7)
                output += `\n\t <button id="${id}" class="left" onclick=(left2())></button>`;
            else if (world[x][y] == 6)
                output += `\n\t <button id="${id}" class="down" onclick=(down2())></button>`;
            else if (world[x][y] == 8)
                output += `\n\t <button id="${id}" class="right" onclick=(right2())></button>`;
            else if (world[x][y] == 10)
                output += `\n\t <div id="${id}" class="pinkGhost"></div>`;
            else if (world[x][y] == 11)
                output += `\n\t <div id="${id}" class="blueGhost"></div>`;
            }
        output += "\n</div>";
    }
    // console.log (output);
    document.getElementById("world").innerHTML = output;
};var current_rotation = 0


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
var pacloc = [19,12]; // starting pac loacation
var redloc = [10,14]; //starting red loc
var blueloc = [10,13] //starting blue loc
function displayWorld(){
    var output = "";
    
    for (var x=0; x<world.length; x++){
        output += "\n <div class='row'>";
        for (var y=0; y<world.length; y++){

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
    document.getElementById("world").innerHTML = output;
};
window.addEventListener("keydown", keypresser)

var p = 0 //scorboard start
var current_rotation = 0; //keeps pack rotation at 0
var powercount = 0; //starting powercount
var redcount = 8; //interval for red move
var bluecount = 8; //interval for red move
var upwardsValue = 1;
window.requestAnimationFrame(redGhostMove);
window.requestAnimationFrame(blueGhostMove);
setInterval(Timer, 800)
function Timer(){
    console.log("timer")
    if (powercount > 0){
        powercount --
    }
}
function scoreBoard(){
    p = (p + 10);
    document.getElementById("p1").innerHTML = (p);
    if (p == 2220){
        window.alert("Level 2"+"score="+p);
        world = world2;
        redloc = [8,14];
        blueloc = [8,13];
        pacloc = [19,19];
        setTimeout(displayWorld,500)
    }
    else if (p == 4430){
        window.alert("Level 3"+"score="+p);
        world = world3;
        redloc = [8,14];
        blueloc = [8,13];
        pacloc = [19,19];
        setTimeout(displayWorld,500)
    }
    else if (p == 6820){
        window.alert("Winner!!")
        document. location. reload()
    }
}

function rotateright(i){
    document.getElementsByClassName("pacMan")[0].style.transform = 'rotate(' + i + 'deg)';
};

function keypresser(e){
    console.log(e)
    if (e.key == "w"){
        upwardsValue = world[pacloc[0]-1][pacloc[1]];
        t = 1;
        y = [pacloc[0],pacloc[1]];
        pacMove(upwardsValue);
        console.log(upwardsValue)
        rotateright(-90)
    }
    else if (e.key == "d"){
        upwardsValue = world[pacloc[0]][pacloc[1]+1];
        t = 2;
        y = [pacloc[0],pacloc[1]];
        pacMove(upwardsValue);
        console.log(upwardsValue)
        rotateright(0)
    }
    else if (e.key == "a"){
        upwardsValue = world[pacloc[0]][pacloc[1]-1];
        t = 3;
        y = [pacloc[0],pacloc[1]];
        pacMove(upwardsValue);
        console.log(upwardsValue)
        rotateright(180)
    }
    else if (e.key == "s"){
        upwardsValue = world[pacloc[0]+1][pacloc[1]];
        t = 4;
        y = [pacloc[0],pacloc[1]];
        pacMove(upwardsValue);
        console.log(upwardsValue)
        rotateright(90)
    }
    else if (e.key == "k"){
        powercount = 4420;
    } 
}
   

function pacMove(upwardsValue) {
    if (upwardsValue == 2){
        console.log ("Thats a no");
    }
    else if (upwardsValue == 1){
        console.log ("coin");
       world[pacloc[0]][pacloc[1]] = 0;
       upwardsValue = 5;
    if (t == 1){
        pacloc[0] -= 1;
    }
    else if (t == 2){
         pacloc[1] += 1
    }
    else if (t == 3){
         pacloc[1] -= 1
     }
     else if (t == 4){
         pacloc[0] += 1
     };
    var newPacLocation = [pacloc[0],pacloc[1]];
    var oldPacLocation = y;
    var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`)
    var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`)
    oldCell.setAttribute("class", "empty");
    newCell.setAttribute("class","pacMan");
    scoreBoard()
    }
    else if (upwardsValue == 32){
        powercount = 15;
        world[pacloc[0]][pacloc[1]] = 0;
       upwardsValue = 5;
    if (t == 1){
        pacloc[0] -= 1;
    }
    else if (t == 2){
         pacloc[1] += 1
    }
    else if (t == 3){
         pacloc[1] -= 1
     }
     else if (t == 4){
         pacloc[0] += 1
     };
    var newPacLocation = [pacloc[0],pacloc[1]];
    var oldPacLocation = y;
    var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`)
    var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`)
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
        }}
        else if (upwardsValue == 11){
            if (powercount > 0){
                var oldghostLocation = [blueloc[0],blueloc[1]];
                    blueloc = [10,13];
        var newghostLocation = [10,13];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
        
        oldCell.classList.remove("pacGhost");
        newCell.classList.add("pacGhost")
            }}
    else {
        world[pacloc[0]][pacloc[1]] = 0;
        upwardsValue = 5;
           if (t == 1){
               pacloc[0] -= 1;
           }
           else if (t == 2){
                pacloc[1] += 1
           }
           else if (t == 3){
                pacloc[1] -= 1
            }
            else if (t == 4){
                pacloc[0] += 1
            }
           
        var newPacLocation = [pacloc[0],pacloc[1]];
        var oldPacLocation = y;
        var oldCell = document.querySelector(`#x${oldPacLocation[0]}y${oldPacLocation[1]}`);
        var newCell = document.querySelector(`#x${newPacLocation[0]}y${newPacLocation[1]}`);
        oldCell.setAttribute("class", "empty");
        newCell.setAttribute("class","pacMan");
        }
        
}
function redGhostMove(){
    if (redcount == 0){ 
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr(redloc,"pinkGhost");
        }
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
function blueGhostMove(){
    if (bluecount == 0){
        
        var num = Math.floor(Math.random() * 4);
        if (num == 0){
            upwardsr(blueloc,"blueGhost");
        }
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
function upwardsr(ghostLoc,color) {
    var upwardsValuer = world[ghostLoc[0]-1][ghostLoc[1]]
        if (upwardsValuer == 2){
        }
        else if(world[ghostLoc[0]-1] == world[pacloc[0]] && world[ghostLoc[1]] == world[pacloc[1]]){
            console.log(pacloc + "pac")
            console.log(redloc + "red")
            console.log(blueloc + "blue")
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
                console.log("oops")
            window.alert("GameOver")
            document. location. reload()
        }}
        
        else{
           ghostLoc[0] -= 1;
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0]+1,ghostLoc[1]];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
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
        }
        else if(world[ghostLoc[0]] == world[pacloc[0]] && world[ghostLoc[1]+1] == world[pacloc[1]]){
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
           ghostLoc[1] += 1;
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]-1];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
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
        }
        else if(world[ghostLoc[0]+1] == world[pacloc[0]] && world[ghostLoc[1]] == world[pacloc[1]]){
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
           ghostLoc[0] += 1;
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0]-1,ghostLoc[1]];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
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
        }
        else if(world[ghostLoc[0]] == world[pacloc[0]] && world[ghostLoc[1]] == world[pacloc[1]-1]){
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
           ghostLoc[1] -= 1;
        var newghostLocation = [ghostLoc[0],ghostLoc[1]];
        var oldghostLocation = [ghostLoc[0],ghostLoc[1]+1];
        var oldCell = document.querySelector(`#x${oldghostLocation[0]}y${oldghostLocation[1]}`);
        var newCell = document.querySelector(`#x${newghostLocation[0]}y${newghostLocation[1]}`);
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
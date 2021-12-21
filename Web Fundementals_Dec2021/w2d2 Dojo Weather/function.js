function say (){
     window.alert("Brubank selected?");
}

function say2 (){
    window.alert("Chicago selected?")
}

function say3 (){
    window.alert("Dallas selected?")
}

function other (){
    document.getElementById("cookies").style.display = "none"
    console.log ("hello")
}
//function triggered on change of select
function update() {
    var tempSelect = document.getElementById('showTemp'); //grabbing the main select tag
    var tempOption = tempSelect.options[tempSelect.selectedIndex].value;
//getting the value of the selected option either C or F
    var tempArray = document.getElementsByClassName("temp");
    var tempArrayCount = tempArray.length;
    //grabbing all of the numbers and placing them in an array and making a var for the array length
    for (i = 0; i < tempArrayCount; i++){//loop counting through each number by index in array
        var getTemp = tempArray[i];
        if (tempOption == "F" ){
            var setTempF = (getTemp.innerText * 1.8)+32;
            getTemp.innerText = Math.floor(setTempF);      
        } //if the option value is F then it converts the number and sets inner text to the
        else {
            var setTempC = (getTemp.innerText - 32)/1.8;
            getTemp.innerText = Math.floor(setTempC);
        }
    }

}

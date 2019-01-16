var colors = [];
var gradient = [];
var setOption = "";
var degrees = 45;

var box = document.querySelectorAll(".box");
var boxColor = document.querySelectorAll(".boxColor");
var boxValue = document.querySelectorAll(".boxValue");
var newButton = document.querySelector("#newButton");

var solidBtn = document.querySelector("#solidBtn");
var gradientBtn = document.querySelector("#gradientBtn");
var degSection = document.querySelector(".degSection");
var gradientDegrees = document.querySelector("#gradientDeg"); 

init();

//Events Listeners
//___________________________________________

solidBtn.addEventListener("click", function(){
    degSection.style.display = "none";
    setOption = "solid";
    addColors();
});
gradientBtn.addEventListener("click", function(){
    degSection.style.display = "block";
    setOption = "gradient";
    addColors();
});
gradientDegrees.addEventListener("change", function(){
    degrees = Number(this.value);
    addColors();
})


//Functions
//___________________________________________

//Generating RGB Random Color
function randomColor(option){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "red" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "red" from 0-255
    var b = Math.floor(Math.random() * 256);

    if (option === "solid"){
        return "rgb("+ r + ", " + g + ", " + b + ")";
    }else{
        return "rgb("+ r + ", " + g + ", " + b + "), rgb("+ g + ", " + b + ", " + r + ")";
    }
    
}

//Array of Random RGB colors
function generateRandomColors(num){
    //create an array
    var arr = [];
    //add colors to array num times
     for(var i = 0; i < num; i++){
        //get random color and push to arr
        arr.push(randomColor(setOption));
     }
    // return that array
    return arr;
}

function addColors() {
    //add colors to Color array
    colors  = generateRandomColors(boxColor.length);

    for(var i = 0; i < colors.length; i++){
        if(setOption === "solid"){
            boxColor[i].style.background = colors[i];   
        } else{
            boxColor[i].style.background = "linear-gradient("+degrees+"deg, "+ colors[i]+ " )";
        } 
        boxValue[i].textContent = colors[i];
    }
}

//Initial function
//________________________________________________

function init(){
    setOption = "solid";
    degSection.style.display = "none";
    addColors();
}

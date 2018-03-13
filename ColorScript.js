var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var button=document.querySelector(".btn");
console.log(button);
body=document.getElementById("body");
//Get a random number
function randomNumber(min,max) {

    return Math.floor(Math.random() * ((max+1) - min)) + min;
}
//Pick a random style
function randomStyle() {
    var style;
    var number=randomNumber(1,4);
console.log(number);
 switch(number) {
        case 1:
            return style="to right";
        case 2:
            var firstRga=randomColor();
            var secondRga=randomColor();
            return style="to right"+","+firstRga+","+secondRga
        case 3:
            return style="to bottom";

        case 4:
            return style="-90deg";


            default:
            console.log("We have bug in the system")
    }

}
//Get random number for a color + adding characters
function randomColor() {
    var backgroundColor="rgb(";
    for(var i=0;i<3;i++){
        var number=randomNumber(0,255);
        backgroundColor=backgroundColor.concat(number.toString());
        if(i===0 || i===1){
            backgroundColor=backgroundColor.concat(",");
        }
    }
    return  backgroundColor=backgroundColor.concat(")");

}
//Manual choosing a color
function colorPick(){

    body.style.background=
        "linear-gradient(to right,"
        +color1.value
        + ", "
        +color2.value
        +")";
    css.textContent=body.style.background+";";
}
//Finishing random picking a color
function randomColorPick() {

    var firstRga=randomColor();
    var secondRga=randomColor();
    var style=randomStyle();
    console.log(style);
    body.style.background="linear-gradient("+style+"," +
        firstRga+
        ", "+
        secondRga+
        ")";

    css.textContent=body.style.background+";";


}


color1.addEventListener("input",colorPick);
color2.addEventListener("input",colorPick);
button.addEventListener("click",randomColorPick);
//How many colours
//Choose a style
//Homepage


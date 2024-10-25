document.getElementById("img").src="images/off.png";
document.getElementById("off").style.backgroundColor="rgb(225,67,87)";
document.getElementById("off").style.Color="white";

function btnon(){
    let img=(document.getElementById("img").src="images/on.png");
    document.getElementById("span").innerHTML="on";
    document.getElementById("on").style.backgroundColor="rgb(245,54,34)";
    document.getElementById("on").style.Color="white";
    document.getElementById("off").style.backgroundColor="white";
    document.getElementById("off").style.Color="black";
}

function btnoff(){
    let imgs=(document.getElementById("img").src="images/off.png");
    document.getElementById("span").innerHTML="off";
    document.getElementById("off").style.backgroundColor="rgb(245,54,34)";
    document.getElementById("off").style.Color="white";
    document.getElementById("on").style.backgroundColor="white";
    document.getElementById("on").style.Color="black";
}
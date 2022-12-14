
let output1 = document.getElementById("output");

function total(num){
    output1.value += num;
}
console.log(output1)
// console.log(total())
function equal(){
    try{
        output1.value = eval(output1.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function square(){
    output1.value = output1.value**2
}
function square1(){
    output1.value = output1.value**output1.value;
}
function deletee(){
    output1.value =''
}
function every(){
    output1.value = output1.value.slice(0,-1);
}
function sin1(){
    output1.value = output1.value*0.017453292549885133+"approx";
}
function color(){
    document.getElementById("container").style.backgroundColor = "#ffffff";
    document.getElementById("output").style.backgroundColor = "#ffffff";
    document.getElementById("button").style.backgroundColor = "#ffffff";
    document.getElementById("button1").style.backgroundColor = "#ffffff";
    document.getElementById("button2").style.backgroundColor = "#ffffff";
    document.getElementById("button3").style.backgroundColor = "#ffffff";
    document.getElementById("button4").style.backgroundColor = "#ffffff";
    document.getElementById("button5").style.backgroundColor = "#ffffff";
    document.getElementById("button6").style.backgroundColor = "#ffffff";
    document.getElementById("button7").style.backgroundColor = "#ffffff";
    document.getElementById("button8").style.backgroundColor = "#ffffff";
    document.getElementById("button9").style.backgroundColor = "#ffffff";
    document.getElementById("button10").style.backgroundColor = "#ffffff";
    document.getElementById("button11").style.backgroundColor = "#ffffff";
    document.getElementById("button12").style.backgroundColor = "#ffffff";
    document.getElementById("button13").style.backgroundColor = "#ffffff";
    document.getElementById("button14").style.backgroundColor = "#ffffff";
    document.getElementById("button15").style.backgroundColor = "#ffffff";
    document.getElementById("button16").style.backgroundColor = "#ffffff";
    document.getElementById("button17").style.backgroundColor = "#ffffff";
    document.getElementById("button18").style.backgroundColor = "#ffffff";
    document.getElementById("button19").style.backgroundColor = "#ffffff";
    document.getElementById("button20").style.backgroundColor = "#ffffff";
    document.getElementById("button21").style.backgroundColor = "#ffffff";
    document.getElementById("button22").style.backgroundColor = "#ffffff";

}
function color1(){
    document.getElementById("container").style.backgroundColor = "";
    document.getElementById("output").style.backgroundColor = "";
    document.getElementById("button").style.backgroundColor = "";
    document.getElementById("button1").style.backgroundColor = "";
    document.getElementById("button2").style.backgroundColor = "";
    document.getElementById("button3").style.backgroundColor = "";
    document.getElementById("button4").style.backgroundColor = "";
    document.getElementById("button5").style.backgroundColor = "";
    document.getElementById("button6").style.backgroundColor = "";
    document.getElementById("button7").style.backgroundColor = "";
    document.getElementById("button8").style.backgroundColor = "";
    document.getElementById("button9").style.backgroundColor = "";
    document.getElementById("button10").style.backgroundColor = "";
    document.getElementById("button11").style.backgroundColor = "";
    document.getElementById("button12").style.backgroundColor = "";
    document.getElementById("button13").style.backgroundColor = "";
    document.getElementById("button14").style.backgroundColor = "";
    document.getElementById("button15").style.backgroundColor = "";
    document.getElementById("button16").style.backgroundColor = "";
    document.getElementById("button17").style.backgroundColor = "";
    document.getElementById("button18").style.backgroundColor = "";
    document.getElementById("button19").style.backgroundColor = "";
    document.getElementById("button20").style.backgroundColor = "";
    document.getElementById("button21").style.backgroundColor = "";
    document.getElementById("button22").style.backgroundColor = "";
}
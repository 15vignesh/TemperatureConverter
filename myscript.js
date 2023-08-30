function converter(){
    var x=parseFloat(document.getElementById("temp").value);
    if(isNaN(x)){alert("Enter temperature value in input box");}
    var fahren=((9*x)/5)+32;
    var val=document.getElementById("demo");
    val.innerHTML=fahren.toFixed(2)+ "°F"
    if (fahren>99.00)
    {
        val.style.color="red";
    }
    else{
        val.style.color="green";
    }
}
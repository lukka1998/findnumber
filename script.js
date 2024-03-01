var randomInt = Math.floor(Math.random() * 20);
console.log(randomInt);
var i=0;
var num = parseInt(prompt("Enter the your value:1,20"));
while(num!=randomInt){
    // var num = parseInt(prompt("Enter the your value:1,20"));
    if(num>randomInt){
       var num=parseInt(prompt("next try " + " search below"));
       i++
    }
    else if(num<randomInt){
        var num=parseInt(prompt("next try " + "seacrh up "));
        i++
    }
    else{
        break;
    }
}
if(num===randomInt){
    console.log("you find a number on the "+i+" try and this is "+num)
    
}




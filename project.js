
var age=10

if (age<10) {price=$20; Console.log ("Please pay $20")}

else if (age>10)|| (age<20); Console.log("Please pay $30")} 

else {Console.log ("Please pay $40")}

var buffetPrice = function(age){

    var price=0;
    if (age<10){
        price=20;
    } else if ((age>=10) && (age <21)) {
        price = 30;
    } else price=40;
    
    return (price)
}
console.log("age=9:$" + buffetPrice(9));
console.log("age=15:$" + buffetPrice(15));
console.log("age=25:$" + buffetPrice(25));
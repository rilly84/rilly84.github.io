var mul= function(n,m){
    return(n * m);
}

/*for(var i=1;i<13;i++) {
    console.log(i + "*3=" +mul(i));
}*/


for (var outer=2;outer<13;outer++) {
    console.log("Multiplication table: %d,outer")
    for(var inner=1;inner<13;inner++){
        //string interpolation//
        console.log("%d * %d = %d", outer,inner,mul(outer,inner));
    }
}

var i=0;

while(i<10) {console.log("i=%d",i)};
i++}
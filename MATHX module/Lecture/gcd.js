function getGCD(a,b){
    if (a == 0 && b==0){
        console.log("Infy");
        return -1
    }
    else if(a == 0){
        return b
    }
    else if(b == 0){
        return a
    }
    else if(a<=b){
        return (a, b%a)
    }
    else{
        return (b, a%b)
    }
}
console.log(getGCD(63, 45));
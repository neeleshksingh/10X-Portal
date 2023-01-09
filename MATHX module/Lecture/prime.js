let n = 2
for(let i=2;i<n;i++){
    if(n==1){
        console.log('not prime');
    }
    else if(n==2){
        console.log('prime');
    }
    else if(n%i == 0){
        console.log('not prime');
        break
    }
    
}
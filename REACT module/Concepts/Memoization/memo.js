//create memoization function

function memo(fn) {
    //caching
    let cache = [];
    //{arguments: "", result: ""}
    //memoized function
    return (...args)=> {
        //num1-num2
      //"1,2,3"
      //[{}]
      //{}
      let isCached = cache.find((value)=> {
          return value.arguments === JSON.stringify(args);
      });
      if(isCached) {
          console.log("from stored value")
        return isCached.result
      }
      isCached = fn(args);
      cache.push({arguments: JSON.stringify(args), result: isCached});
     return isCached;
      
    }
    }
    
    function add(args) {
    let sum = 0;
     for(let i=0;i<args.length; i++) {
             sum = sum + args[i]
     }
     return sum
    }
    const memoizedAdd = memo(add);
    console.log(memoizedAdd(1,2,3));
    console.log(memoizedAdd(1,2,3));
    console.log(memoizedAdd(3,2,1));
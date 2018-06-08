function sortArray(arr){
    let n = 0
    for (let i = n; i < arr.length; i++) {
      let smallest = arr[n]
      for(let j = n; j<arr.length; j++){
        if(arr[j]<smallest){
          smallest = arr[j]
          arr[j] = arr[n]
          arr[n] = smallest
        }
      }
      n+=1
    }
    // console.log(arr);
    return arr
 }

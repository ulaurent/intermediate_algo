// Sum of two #'s + sum of all numbers between them

function sumAll(arr) {
    // If first first element in array is less than second element
    if(arr[0]<arr[1]){
  
        var count = 0;
        for(var i=arr[0]; i<arr[1]; i++) {
            count += i;
        }
        
        var track = (count - arr[0])+(arr[1]+arr[0]);
            return track;
        }
    // Else, first element would be greater then second 
    else {
  
        var count = 0;
        for(var i=arr[1]; i<arr[0]; i++) {
            count += i;
        }
         var track = (count - arr[1])+(arr[1]+arr[0]);
            return track;
        }
}

sumAll([10, 5]);
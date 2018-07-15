    function diffArray(arr1, arr2) {
      var newArr = [];

      function filtering(first, second) {
        // Loop then filter through array to eliminate elements that do not belong
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
        // Pushing the elements to newArr
            newArr.push(first[i]);
          }
        }
      }

      filtering(arr1, arr2);
      filtering(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function(){
    var first = firstAndLast.split(" ");
    return first[0];
  }
  this.getLastName = function(){
    var last = firstAndLast.split(" ");
    return last[1];
  }
  this.setFirstName = function(first){
    firstAndLast =  firstAndLast.split(" ");
    firstAndLast[0] = first;
    firstAndLast = firstAndLast.join(" ");
    return firstAndLast;
  }
  this.setLastName = function(last){
    firstAndLast =  firstAndLast.split(" ");
    firstAndLast[1] = last;
    firstAndLast = firstAndLast.join(" ");
    return firstAndLast;
  }
  this.setFullName = function(full){
    firstAndLast =  firstAndLast.split(" ");
    full = full.split(" ");
    firstAndLast[0] = full[0];
    firstAndLast[1] = full[1];
    firstAndLast = firstAndLast.join(" ");
    return firstAndLast;
  }
  
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
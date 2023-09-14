function closure() {
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 0);
    })(i);
  }
}

function closure2() {
  for (var i = 0; i < 5; i++) {
    setTimeout((i) => console.log(i), 0, i)
  }
}

function closure3() {
  var test = [];
  for (var i=0; i< 5; i++) {
    (function (i) {
      console.log(i);
      setTimeout(()=>test.push(i), 0);
    })(i);
  }
  console.log(test);
}

function closure4() {
  for (var j = 0; j < 5; j++) {
    setTimeout((function(j) {
      return function() {
        console.log(j)
      }
    })(j),0)
  }

}

closure4();

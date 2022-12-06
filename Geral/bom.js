var i = 5
var x= setInterval(function() {
  document.write(i + "<br/>");
  i -= 1;
  if (i === 0) {
    clearInterval(x)
    }
}, 1000)

$("form_for").on('submit', function(e) {
  alert("test")
  e.preventDefault();
  e.returnValue = false;

})



// $("a.add_ingredient").on("click", function(e){
//   alert("test")
//   e.preventDefault();
// })

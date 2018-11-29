// $(function(){
//   $("#new_ingredient").on("submit", function(e){
//     $.ajax({
//     type: ($("input[name='_method']").val() || this.method),
//     url: this.action,
//     data: $(this).serialize();,
//     success: function(response){
//       $("#ingredient_name").val("");
//       var $ol = $("div.ingredients ol")
//       $ol.append(response);
//     }
//   });
//     e.preventDefault();
//   })
// });

$(function(){
  $("#new_ingredient").on("submit", function(e){

    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        $("#ingredient_name").val("");
        var $ol = $("div.ingredients ol")
        $ol.append(response);
      }
    });

    e.preventDefault();
  })
});

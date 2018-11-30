$(function(){
  $("#new_ingredient").on("submit", function(e){

    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action,
      data: $(this).serialize(),
      success: function(response){
        $("#ingredient_name").val("") && $("#ingredient_quantity").val("");
        var $ul = $("div.ingredients ul")
        var ing = ` <li>${response.name}: ${response.quantity}</li> `
        var link = `<a rel= "nofollow" data-method="delete" href= "/recipes/${response.recipe.id}/ingredients/${response.id}">Delete</a>`
        $ul.append(ing + link);
        $("div.actions input").prop("disabled", false)
      }
    });

    e.preventDefault();
  })
});

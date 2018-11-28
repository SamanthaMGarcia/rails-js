$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    $("a.index_button").on('click', (e) => {
        e.preventDefault()
        fetch(`/recipes.json`)
            .then(response => response.json())
            .then(recipes => {
                console.log("here are recipes: ", recipes);

                $("div.recipes ol").html("")
                recipes.forEach(recipe => {
                    let newRecipe = new Recipe(recipe)
                    let recipeHtml = newRecipe.formatIndex(recipe)
                    $("div.recipes").append(recipeHtml)
               })
          })
    })

      $(document).on('click', ".show_link", function(e) {
        e.preventDefault()
        let id = $(this).attr('data-id')
        fetch(`/recipes/${id}.json`)
        .then(response => response.json())
        .then(recipe => {
          console.log(recipe)
        })
    })
}

function Recipe(recipe){
  this.id = recipe.id
  this.title = recipe.title
  this.instructions = recipe.instructions
  this.ingredients = recipe.ingredients

}

Recipe.prototype.formatIndex = function(){
  let recipeHtml = `
  <a href="/recipes/${this.id}" data-id="${this.id}" class="show_link"><h1>${this.title}</h1></a>
  `
  return recipeHtml
}

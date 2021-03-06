$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    $("a.index_button").on('click', (e) => {
        e.preventDefault()
        // fetch(`/recipes.json`)
        getRecipes()

      })


      $(document).on('click', ".show_link", function(e) {
        e.preventDefault()
        $("div.recipes ol").html("")
        let id = $(this).attr('data-id')
        fetch(`/recipes/${id}.json`)
        .then(response => response.json())
        .then(recipe => {

          let newRecipe = new Recipe(recipe)
          let recipeHtml = newRecipe.formatShow()

          $("div.recipes ol").append(recipeHtml)

        })
    })
  }

const getRecipes = () => {
  fetch(`/recipes.json`)
      .then(response => response.json())
      .then(recipes => {
          console.log("here are recipes: ", recipes);
          recipes.sort(function(a, b) {
            console.log("hello")
            var nameA = a.title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });


          $("div.recipes ol").html("")
          recipes.forEach(recipe => {
              let newRecipe = new Recipe(recipe)
              let recipeHtml = newRecipe.formatIndex(recipe)
              $("div.recipes ol").append(recipeHtml)
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

Recipe.prototype.formatShow = function(){
  let ingredientsHtml = `<ul>`
  this.ingredients.forEach(ingredient => ingredientsHtml += `<li>${ingredient.name}</li>`)
  ingredientsHtml += `</ul>`
  let recipeHtml = `
  <h3>${this.title}</h3>
  <hr>
  <h4>${this.instructions}</h4>
  <hr>
  ${ingredientsHtml}
  `
  return recipeHtml
}

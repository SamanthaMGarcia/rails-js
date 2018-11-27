$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    $("a.home_button").on('click', (e) => {
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

  $(document).on('click', 'next-recipe', function() {
    let id = $(this).attr('data-id')
    fetch(`recipes/${id}/next`)
  })
}

class Recipe {
    constructor(id, title, instructions, ingredients) {
        this.id = id,
        this.title = title,
        this.instructions = instructions,
        this.ingredients = ingredients || []
    }

    formatIndex(recipe) {
        console.log("recipe: ", recipe)

        let recipeHtml = (`<a href="/recipes/${this.id}" data-id="${this.id}" class="show_link"><h1>${recipe.title}</h1></a>`)
        return recipeHtml
    }

    // formatShow(recipe) {
    //   let recipeHtml = `
    //   <h3>${this.title}</h3>
    //   <button class="next-recipe">Next</button>
    //   `
    //   return recipeHtml
    // }
}

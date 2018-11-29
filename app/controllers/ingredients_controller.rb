class IngredientsController < ApplicationController
  before_action :set_recipe

  def index
    @ingredients = Ingredient.all
    respond_to do |f|
      f.html
      f.json {render json: @ingredient}
    end
  end

  def create
    @ingredient = @recipe.ingredients.create(ingredient_params)
      if @ingredient.save
        render 'create.js'
      else
        render "recipes/show"
      end
  end

  def destroy
    @ingredient = @recipe.ingredients.find(params[:id])
    @ingredient.destroy
    redirect_to recipe_path(@recipe)
  end
end

  private

    def set_recipe
      @recipe = Recipe.find(params[:recipe_id])
    end

    def ingredient_params
      params.require(:ingredient).permit(:name, :quantity)
    end

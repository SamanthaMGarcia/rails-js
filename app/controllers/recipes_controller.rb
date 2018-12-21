class RecipesController < ApplicationController
  before_action :find_recipe, only: [:show, :update, :edit, :destroy]

  def index
    @recipes = Recipe.all
    respond_to do |f|
      f.html
      f.json {render json: @recipes}
    end
  end

  def new
    @recipe = Recipe.new
  end

  def show
    respond_to do |f|
      f.html
      f.json {render json: @recipe}
    end
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to @recipe
    else
      render 'new'
    end
  end

  def update
    if @recipe.update(recipe_params)
      redirect_to @recipe
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @recipe.destroy
    redirect_to recipes_path
  end



private
  def recipe_params
    params.require(:recipe).permit(:title, :instructions)
  end

  def find_recipe
    @recipe = Recipe.find(params[:id])
  end
end

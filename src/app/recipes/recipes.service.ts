import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService
{
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://static4.depositphotos.com/1012068/297/i/600/depositphotos_2970374-stock-photo-viennese-schnitzel-escalope.jpg',
      ingredients: ['Pork', 'Bread Crumbs', 'Eggs', 'Flour']
    },
    {
      id: 'r2',
      title: 'Beef Pörkölt',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2015/03/Porkolt-4-1.jpg',
      ingredients: ['Beef', 'Onions', 'Paprika', 'Tomato Puree']
    }
  ];


  getAllRecipes ()
  {
    return [...this.recipes];
  }


  // return single recipe based on Id
  getRecipe (recipeID: string)
  {
    return {
      ...this.recipes.find(recipe =>
      {
        return recipe.id === recipeID;

      })
    };
  }


  deleteRecipe (recipeId: string)
 
  {
    console.log(this.recipes);
    this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
    })
console.log(this.recipes)
  }
}

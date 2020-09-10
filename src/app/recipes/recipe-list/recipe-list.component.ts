import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('Recipe 1', 'Recipe description 1', 'https://source.unsplash.com/400x225/?burger'),
    new Recipe('Recipe 2', 'Recipe description 2', 'https://source.unsplash.com/400x225/?burger'),
    new Recipe('Recipe 3', 'Recipe description 3', 'https://source.unsplash.com/400x225/?burger'),
    new Recipe('Recipe 4', 'Recipe description 4', 'https://source.unsplash.com/400x225/?burger'),
    new Recipe('Recipe 5', 'Recipe description 5', 'https://source.unsplash.com/400x225/?burger'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

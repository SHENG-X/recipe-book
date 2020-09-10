import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[]  = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 3),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

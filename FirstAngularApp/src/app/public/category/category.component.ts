import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  name: string ='kids wear'

  changeName(){
    this.name='category name changed';
  }

}

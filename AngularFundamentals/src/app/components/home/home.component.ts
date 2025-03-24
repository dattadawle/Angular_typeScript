import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mensproducts=[
    {id:1,name:'shirt1',price:200},
    {id:2,name:'shirt2',price:300},
    {id:3,name:'shirt3',price:400},
    {id:4,name:'shirt4',price:500}
  ];
  kidsproducts=[
     {id:1,name:'kids shirt 1',price:299},
     {id:2,name:'kids shirt 2',price:399},
     {id:3,name:'kids shirt 3',price:499}

  ]
}

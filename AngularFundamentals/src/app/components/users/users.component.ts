import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
users=[
  {name :"Vishal", city:"pune", salary:10000,dob:"01/05/1990",speciality:"software engineer",orderamount :45.563},
  {name :"datta", city:"latur", salary:15000,dob:"02/07/1997",speciality:"senior software engineer",orderamount :789.56},
  {name :"prasad", city:"mumbai", salary:20000,dob:"04/05/1996",speciality:"software developer",orderamount :45.56777},
  {name :"ajay", city:"bengluru", salary:25000,dob:"02/03/1998",speciality:"lead engineer",orderamount :4.56}
]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFundamentals';

  isDisabled=false;
  userName :string | undefined; 

  color: string='red';
  bgColor:string='yellow';

  // paragraphStyle ={
  //   'background-Color':'skyblue',
  //   'color':'red', 
  //   'border':'1px  dotted black'
  // }

  praraphStyle={
    'background-Color':'skyblue',
    'color': 'black'
    
  }

  IsImportent:boolean=true;
  IsVeryImportent:boolean=true;

  classes= {'importent': this.IsImportent ,'veryImportent': this.IsVeryImportent}

  isVisible:boolean=false;

  names:string[]=["shankar","Gaju","avinash","datta"]

  country: string | undefined;
}

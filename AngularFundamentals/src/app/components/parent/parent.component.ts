import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  parentData:string="Datta Dawle";

  receiveChildData:string |  undefined;

  @ViewChild('heading3')
  heading3? :ElementRef;

  @ViewChildren('para')
  para?:QueryList<any>;


  constructor(){
  // console.log( this.heading3?.nativeElement)
  }
  ngAfterViewInit(): void {
    console.log( this.heading3);
    this.heading3?.nativeElement.setAttribute('style','color:red;');

    console.log(this.para);
    this.para?.first.nativeElement.setAttribute('style','color:blue;');
    this.para?.last.nativeElement.setAttribute('style','color:green;');
  }
  receiveData(data : string){
      this.receiveChildData=data;
  }


      getHeading(){
        let e1 =document.getElementById("heading3");

       
        console.log(e1);
      }
   
}

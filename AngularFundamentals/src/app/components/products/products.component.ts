import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {


  @Input()
Products : any[]=[];
@ViewChild('tableheading')
 tableheading : any;

 @ContentChildren('projectedhead')
  projectedHead!: QueryList<ElementRef>; 


  ngAfterViewInit(): void {
    // Set style for tableheading
    if (this.tableheading) {
      this.tableheading.nativeElement.setAttribute('style', 'background-color:yellow');
    }

    // Set style for projectedHead items
    this.projectedHead.forEach((head) => {
      head.nativeElement.setAttribute('style', 'background-color:skyblue');
    });
  }
}

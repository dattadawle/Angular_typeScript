import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { CategoryComponent } from './public/category/category.component';
import { ProductComponent } from './public/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  //bootstrap: [AppComponent,SecondComponent]
  bootstrap:[CategoryComponent,ProductComponent]
})
export class AppModule { }

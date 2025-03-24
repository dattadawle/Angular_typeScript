import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { AgePipe } from './pipes/age.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AgePipe,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

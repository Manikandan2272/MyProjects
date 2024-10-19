import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ListproductComponent } from './listproducts/listproduct.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { GreetuserComponent } from './greetuser/greetuser.componet';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ParentComponent } from './parentcomponent/parentcomponent.component';
import { ChildComponent } from './childcomponent/childcomponent.component';
import { UppercaseDirective } from './Directive/UppercaseDirective/uppercase.directive';
import { CouponcodeComponent } from './coupencode/couponcode/couponcode.component';
import { ReactiveformComponent } from './Form/reactiveform/reactiveform.component';
import { IgGridComponent } from './ig-grid/ig-grid.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddcartComponent,
    ListproductComponent,
    CartitemComponent,
    GreetuserComponent,
    AddproductComponent,
    NgswitchComponent,
    ParentComponent,
    ChildComponent,
    UppercaseDirective,
    CouponcodeComponent,
    ReactiveformComponent,
    IgGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

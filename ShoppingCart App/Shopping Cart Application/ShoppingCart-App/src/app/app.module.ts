import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ListprouductsComponent } from './Products/listprouducts/listprouducts.component';
import { LoginComponent } from './login/login.component';
import { ViewyourcartComponent } from './viewyourcart/viewyourcart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BreadComponent } from './Products/bread/bread.component';
import { SingleComponent } from './Products/single/single.component';
import { DrinksComponent } from './Products/drinks/drinks.component';
import { FrozenComponent } from './Products/frozen/frozen.component';
import { HouseholdComponent } from './Products/household/household.component';
import { KitchenComponent } from './Products/kitchen/kitchen.component';
import { PetComponent } from './Products/pet/pet.component';
import { VegetablesComponent } from './Products/vegetables/vegetables.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { AddproductsComponent } from './Products/addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ListprouductsComponent,
    LoginComponent,
    ViewyourcartComponent,
    NotfoundComponent,
    EventsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ShortcodesComponent,
    FaqsComponent,
    PrivacyComponent,
    BreadComponent,
    SingleComponent,
    DrinksComponent,
    FrozenComponent,
    HouseholdComponent,
    KitchenComponent,
    PetComponent,
    VegetablesComponent,
    PaymentComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

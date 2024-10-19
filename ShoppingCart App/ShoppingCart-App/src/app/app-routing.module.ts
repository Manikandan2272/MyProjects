import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListprouductsComponent } from './Products/listprouducts/listprouducts.component';
import { LoginComponent } from './login/login.component';
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
import { PaymentComponent } from './payment/payment.component';
import { ViewyourcartComponent } from './viewyourcart/viewyourcart.component';
import { AuthGuard } from './auth.guard';
import { AddproductsComponent } from './Products/addproducts/addproducts.component';

const routes: Routes = [
  { path: '', component: ListprouductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mycart', component: ViewyourcartComponent, canActivate: [AuthGuard] },
  { path: 'addproducts', component: AddproductsComponent },
  { path: 'category', redirectTo: '/', pathMatch: "full" },
  { path: 'category/:catid', component: ListprouductsComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

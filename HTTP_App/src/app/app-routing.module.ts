import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { JokesComponent } from './jokes/jokes.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: WeatherComponent },
      { path: "weather", component: WeatherComponent },
      { path: "news", component: NewsComponent },
      { path: "movies", component: MoviesComponent },
      { path: "jokes", component: JokesComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

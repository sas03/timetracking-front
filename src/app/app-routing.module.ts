import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './auth/components/authentication-page/authentication-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"auth",
    component: AuthenticationPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

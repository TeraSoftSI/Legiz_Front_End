import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsHomeComponent} from "./clients/pages/clients-home/clients-home.component";
import {SearchLawyerComponent} from "./lawyers/pages/search-lawyer/search-lawyer.component";
import {SpecializationsComponent} from "./public/specializations/specializations.component";
import {AboutUsComponent} from "./public/about-us/about-us.component";
import {LoginComponent} from "./public/login/login.component";
import {LawyersHomeComponent} from "./lawyers/pages/lawyers-home/lawyers-home.component";
import {SignUpBaseComponent} from "./public/sign-up/sign-up-base/sign-up-base.component";
import {SignUpClientsComponent} from "./public/sign-up/sign-up-clients/sign-up-clients.component";
import {SignUpLawyersComponent} from "./public/sign-up/sign-up-lawyers/sign-up-lawyers.component";
import {PageNotFoundComponent} from "./public/page-not-found/page-not-found.component";
import {AdvicesComponent} from "./legal-advices/pages/advices/advices.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'clients-home', component: ClientsHomeComponent},
  { path: 'lawyers-home', component: LawyersHomeComponent},
  { path: 'search-lawyer', component: SearchLawyerComponent},
  { path: 'specializations', component: SpecializationsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpBaseComponent},
  { path: 'sign-up/clients', component: SignUpClientsComponent},
  { path: 'sign-up/lawyers', component: SignUpLawyersComponent},
  { path: 'test', component: ClientsHomeComponent},
  { path: 'advices', component: AdvicesComponent},

  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

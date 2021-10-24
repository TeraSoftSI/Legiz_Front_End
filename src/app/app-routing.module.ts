import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./domain/main/main.component";
import { SignUpBaseComponent } from "./public/sign-up/sign-up-base/sign-up-base.component";
import { FormClientComponent } from "./public/sign-up/sign-up-client/form-client/form-client.component";
import { FormLawyerComponent } from "./public/sign-up/sign-up-lawyer/form-lawyer/form-lawyer.component";
import { CardFormLawyerComponent } from "./domain/search-lawyer/card-form-lawyer/card-form-lawyer.component";

const routes: Routes = [
  { path: 'sign-up', component: SignUpBaseComponent },
  { path: 'sign-up/client', component: FormClientComponent },
  { path: 'sign-up/lawyer', component: FormLawyerComponent },
  { path: 'main', component: MainComponent },
  { path: 'search-lawyer', component: CardFormLawyerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

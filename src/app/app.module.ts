import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/home/home.component';
import { ClientsHomeComponent } from './clients/pages/clients-home/clients-home.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import { AdvicesComponent } from './legal-advices/pages/advices/advices.component';
import { SearchLawyerComponent } from './lawyers/pages/search-lawyer/search-lawyer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import { SpecializationsComponent } from './public/specializations/specializations.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { LoginComponent } from './public/login/login.component';
import { LawyersHomeComponent } from './lawyers/pages/lawyers-home/lawyers-home.component';
import { SignUpBaseComponent } from './public/sign-up/sign-up-base/sign-up-base.component';
import { SignUpClientsComponent } from './public/sign-up/sign-up-clients/sign-up-clients.component';
import { SignUpLawyersComponent } from './public/sign-up/sign-up-lawyers/sign-up-lawyers.component';
import { DialogClientsComponent } from './public/sign-up/dialog-clients/dialog-clients.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsHomeComponent,
    AdvicesComponent,
    SearchLawyerComponent,
    SpecializationsComponent,
    AboutUsComponent,
    LoginComponent,
    LawyersHomeComponent,
    SignUpBaseComponent,
    SignUpClientsComponent,
    SignUpLawyersComponent,
    DialogClientsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

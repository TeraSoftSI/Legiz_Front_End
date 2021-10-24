import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MainComponent } from './domain/main/main.component';
import { RouterModule } from "@angular/router";
import { SignUpBaseComponent } from './public/sign-up/sign-up-base/sign-up-base.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { FormClientComponent } from './public/sign-up/sign-up-client/form-client/form-client.component';
import { DialogClientComponent } from './public/sign-up/sign-up-client/dialog-client/dialog-client.component';
import { FormLawyerComponent } from './public/sign-up/sign-up-lawyer/form-lawyer/form-lawyer.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import { FormProfileComponent } from './domain/edit-profile/pages/form-profile/form-profile.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { CardFormLawyerComponent } from './domain/search-lawyer/card-form-lawyer/card-form-lawyer.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignUpBaseComponent,
    FormClientComponent,
    DialogClientComponent,
    FormLawyerComponent,
    FormProfileComponent,
    CardFormLawyerComponent
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
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule,
    MatDialogModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

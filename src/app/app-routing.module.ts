import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LegalAdviceComponent} from "./lawyer/legal-advice/legal-advice.component";
import {ConsultsComponent} from "./client/consults/consults.component";
import {QualificationsComponent} from "./lawyer/qualifications/qualifications.component";
import { MeetingComponent } from "./lawyer/meeting/meeting.component";

const routes: Routes = [
  { path: 'legal-advice', component: LegalAdviceComponent },
  { path: 'consults', component: ConsultsComponent},
  { path: 'qualifications', component: QualificationsComponent},
  { path: 'meetings', component: MeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

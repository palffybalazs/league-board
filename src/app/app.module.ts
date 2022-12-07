import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TeamgroupComponent } from './teamgroup/teamgroup.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {PlayerComponent} from "./player/player.component";
import {GroupDetailedComponent} from "./teamgroup/groupdetailed.component";
import {TeamDetailedComponent} from "./team/teamdetailed.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";

const appRoutes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Teams', component: TeamComponent},
  {path: 'Forms', component: FormComponent},
  { path: 'team-detail/:id', component: TeamDetailedComponent },
  {path: 'Groups', component: TeamgroupComponent},
  { path: 'group-detail/:id', component: GroupDetailedComponent },
  {path: 'Players', component: PlayerComponent},
  ];


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TeamComponent,
    GroupDetailedComponent,
    TeamDetailedComponent,
    TeamgroupComponent,
    FormComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


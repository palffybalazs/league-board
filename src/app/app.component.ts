import {Component, OnInit} from '@angular/core';
import {Team} from "./team/team";
import {TeamService} from "./team/team.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {

  }

  constructor() {  }

}

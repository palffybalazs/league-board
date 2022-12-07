import { Component, OnInit, Input } from '@angular/core';

import {Teamgroup} from "./teamgroup";
import {Team} from "../team/team";
import {TeamService} from "../team/team.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './groupdetailed.html',
  styleUrls: ['./groupdetailed.css']
})
export class GroupDetailedComponent implements OnInit {
  public teamgroupId: string | null;
  public teams: Team[] = [];

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    this.teamgroupId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
      this.getTeamsByGroup(this.teamgroupId);
  }

  public getTeamsByGroup(teamgroupId: string | null): void {
    var id = Number(teamgroupId);
    this.teamService.getTeamOfGroup(id).subscribe(
      (response: Team[]) => {
        this.teams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}

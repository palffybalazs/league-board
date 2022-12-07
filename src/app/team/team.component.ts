import {Team} from "./team";
import {TeamService} from "./team.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Component, Injectable, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})

export class TeamComponent implements OnInit {
  public teams: Team[] = [];
  private id: string | null;
  ngOnInit() {
    this.getTeams();

  }

  constructor(private teamService: TeamService, public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.getTeamsByGroup(Number(this.id));
    }else {
      this.getTeams();
    }
  }

  public getTeams(): void {
    this.teamService.getTeams().subscribe(
      (response: Team[]) => {
        this.teams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTeamsByGroup(teamgroupId: number): void {
    this.teamService.getTeamOfGroup(teamgroupId).subscribe(
      (response: Team[]) => {
        this.teams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

import {Teamgroup} from "./teamgroup";
import {TeamgroupService} from "./teamgroup.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Component, Injectable, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './teamgroup.html',
  styleUrls: ['./teamgroup.css']
})
export class TeamgroupComponent implements OnInit {
  public teamgroups: Teamgroup[] = [];
  public router: Router;
  ngOnInit() {
    console.log('configured routes: ', this.router.config);
    this.getGroups();
  }

  constructor(private teamgroup: TeamgroupService, private route: Router) {
      this.router = route;
  }

  public getTeamsByGroup(teamgroup: Teamgroup) {
    const teamgroupId = teamgroup ? teamgroup.id : null;
    this.router.navigate(['/team', { id: teamgroupId }]);
  }


  public getGroups(): void {
    this.teamgroup.getGroups().subscribe(
      (response: Teamgroup[]) => {
        this.teamgroups = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
}

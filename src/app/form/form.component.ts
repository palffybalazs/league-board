//import {Player} from "./home";
//import {PlayerService} from "./home.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Component, Injectable, OnInit} from "@angular/core";
import {PlayerService} from "../player/player.service";
import {TeamService} from "../team/team.service";
import {Teamgroup} from "../teamgroup/teamgroup";
import {FormBuilder} from "@angular/forms";
import {TeamgroupService} from "../teamgroup/teamgroup.service";
import {Team} from "../team/team";

@Component({
  selector: 'app-root',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})

export class FormComponent implements OnInit {

  public teamgroup: null = null;
  private teamname: string = "";
  private playerid: string = "";
  CreateFormGroup = this.formBuilder.group({
    groupname: ''
  });
  PutTeam = this.formBuilder.group({
    teamid: '',
    newteamname: ''
  });
  RemovePlayer = this.formBuilder.group({
    playerid: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private playerService: PlayerService,
    private teamgroupService: TeamgroupService) {

  }



  ngOnInit() {

  }
  onSubmitGroup(): void {
    var groupname = this.CreateFormGroup.controls['groupname'].value;

    var teamgroup = new Teamgroup(undefined,groupname);
    console.log(teamgroup);
      this.teamgroupService.addGroups(teamgroup).subscribe(
      (response: Teamgroup[]) => {
        console.log(response);
      }
    );
  }

  onSubmitTeam(): void {
    var teamid = Number(this.PutTeam.controls['teamid'].value);
    var teamname = this.PutTeam.controls['newteamname'].value;


    var team = new Team(teamid,teamname, undefined);
    this.teamService.updateTeam(team).subscribe(
      (response: Team[]) => {
        console.log(response);
      }
    );
  }

  onSubmitPlayer(): void {
    var playerid = this.RemovePlayer.controls['playerid'].value;
    this.playerService.deletePlayers(playerid).subscribe(
      (response: void) => {
        console.log(response);
      }
    );
  }



}

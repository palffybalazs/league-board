import { Component, OnInit, Input } from '@angular/core';

import {Team} from "../team/team";
import {PlayerService} from "../player/player.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute,Router} from "@angular/router";
import {Player} from "../player/player";

@Component({
  selector: 'app-root',
  templateUrl: './teamdetailed.html',
  styleUrls: ['./teamdetailed.css']
})
export class TeamDetailedComponent implements OnInit {
  public teamId: string | null;
  public players: Player[] = [];

  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    this.teamId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getTeamsByGroup(this.teamId);
  }

  public getTeamsByGroup(teamgroupId: string | null): void {
    var id = Number(teamgroupId);
    this.playerService.getPlayersOfTeam(id).subscribe(
      (response: Player[]) => {
        this.players = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}

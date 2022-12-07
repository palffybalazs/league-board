import {Player} from "./player";
import {PlayerService} from "./player.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Component, Injectable, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})

export class PlayerComponent implements OnInit {
  public players: Player[] = [];

  ngOnInit() {
    this.getPlayers();
  }

  constructor(private playerService: PlayerService) {
  }

  public getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (response: Player[]) => {
        this.players = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

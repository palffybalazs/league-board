import{Player} from './player';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiServerUrl}/players/`);
  }
  public getPlayersOfTeam(teamId: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiServerUrl}/players/team/${teamId}`);
  }

  public addPlayers(player: Player): Observable<Player[]> {
    return this.http.post<Player[]>(`${this.apiServerUrl}/players/add/`, player);
  }

  public updatePlayers(player: Player): Observable<Player[]> {
    return this.http.put<Player[]>(`${this.apiServerUrl}/players/update/`, player);
  }

  public deletePlayers(playerid: string | null): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/players/delete/${playerid}`);
  }

}

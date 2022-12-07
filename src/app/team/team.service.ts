import{Team} from './team';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiServerUrl}/teams/`);
  }

  public addTeam(team: Team): Observable<Team[]> {
    return this.http.post<Team[]>(`${this.apiServerUrl}/teams/add/`, team);
  }

  public getTeamOfGroup(groupId: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiServerUrl}/teams/group/${groupId}`);
  }

  public updateTeam(teamid: number, newteamname: string | null): Observable<Team[]> {
    console.log(teamid);
    console.log(newteamname);
    newteamname = "test";
    return this.http.put<Team[]>(`${this.apiServerUrl}/teams/update/${teamid}`, newteamname);
  }

  public deleteTeam(teamId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teams/delete/${teamId}`);
  }


}

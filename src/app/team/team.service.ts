import{Team} from './team';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, retry} from "rxjs";
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

  public updateTeam(team: Team): Observable<Team[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var tmp = JSON.stringify(team);
    console.log(tmp);
    return this.http.put<Team[]>(`${this.apiServerUrl}/teams/update/${team.id}`, tmp, {headers: headers}).pipe(
      retry(2)
    );
  }

  public deleteTeam(teamId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teams/delete/${teamId}`);
  }


}

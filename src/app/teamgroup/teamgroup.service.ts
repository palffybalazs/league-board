import{Teamgroup} from './teamgroup';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Team} from "../team/team";

@Injectable({
  providedIn: 'root'
})
export class TeamgroupService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGroups(): Observable<Teamgroup[]> {
    return this.http.get<Teamgroup[]>(`${this.apiServerUrl}/teamgroups/`);
  }

  public addGroups(teamgroup: Teamgroup): Observable<Teamgroup[]> {

    return this.http.post<Teamgroup[]>(`${this.apiServerUrl}/teamgroups/add/`, teamgroup);
  }

  public updateGroups(teamgroup: Teamgroup): Observable<Teamgroup[]> {
    return this.http.put<Teamgroup[]>(`${this.apiServerUrl}/teamgroups/update`, teamgroup);
  }

  public deleteGroups(teamgroupId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teamgroups/delete/${teamgroupId}`);
  }

}

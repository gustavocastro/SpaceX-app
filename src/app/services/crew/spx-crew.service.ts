import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { catchError, Observable, shareReplay } from 'rxjs';
import { User, UserId } from '../../components/spx-crew/details/spx-crew-details/spx-crew-details.component';

type ApiUrl = typeof environment['apiUrl'];

@Injectable({
  providedIn: 'root',
})
export class SpxCrewService {

  private api: ApiUrl = environment.apiUrl;

  public constructor (private http: HttpClient) {}

  public getUsers (): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.api}/crew?limit`)
      .pipe(
        shareReplay(1),
        catchError(
          error => {
            throw new Error(error);
          },
        ),
      );
  }

  public getUserById (id: UserId): Observable<User> {
    return this.http
      .get<User>(`${this.api}/crew/${id}`)
      .pipe(
        catchError(
          error => {
            throw new Error(error);
          },
        ),
      );
  }

}

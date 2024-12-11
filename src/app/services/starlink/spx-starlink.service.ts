import { Injectable } from '@angular/core';
import { Starlink, StarlinkId, StarlinkLaunch, StarlinkLaunchId } from '../../components/spx-starlink/details/spx-starlink-details/spx-starlink-details.component';
import { environment } from '../../../environment';
import { catchError, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type ApiUrl = typeof environment['apiUrl'];

@Injectable({
  providedIn: 'root',
})
export class SpxStarlinkService {

  private api: ApiUrl = environment.apiUrl;

  public constructor (private http: HttpClient) {}

  public getStarlinks (): Observable<Starlink[]> {
    return this.http
      .get<Starlink[]>(`${this.api}/starlink`)
      .pipe(
        shareReplay(1),
        catchError(
          error => {
            throw new Error(error);
          },
        ),
      );
  }

  public getStarlinkById (id: StarlinkId): Observable<Starlink> {
    return this.http
      .get<Starlink>(`${this.api}/starlink/${id}`)
      .pipe(
        catchError(
          error => {
            throw new Error(error);
          },
        ),
      );
  }

  public getStarlinkLaunches (id: StarlinkLaunchId): Observable<StarlinkLaunch> {
    return this.http
      .get<StarlinkLaunch>(`${this.api}/launches/${id}`)
      .pipe(
        catchError(
          error => {
            throw new Error(error);
          },
        ),
      );
  }

}

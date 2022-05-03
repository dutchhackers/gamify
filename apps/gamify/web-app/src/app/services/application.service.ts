import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, IApplication } from '@gamify/shared';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APPLICATIONS_API_PATH = '/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) {
    console.log('application service constructor');
   }

  list$(): Observable<Application[]> {
    return this.http.get<IApplication[]>(`${environment.apiUrl}${APPLICATIONS_API_PATH}`).pipe(
      map(res => res as Application[])
    )
  }

  get$(id: number): Observable<Application> {
    return this.http.get<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`).pipe(
      map(res => res as Application)
    )
  }
}

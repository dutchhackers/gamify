import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, ApplicationType, ApplicationUser, IApplication } from '@gamify/shared';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APPLICATIONS_API_PATH = '/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

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

  create$(payload: { name: string, applicationType: ApplicationType, description: string, externalApplicationUrl?: string }): Observable<Application> {
    return this.http.post<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}`, payload).pipe(
      map(res => res as Application)
    )
  }

  update$(id: number, payload: { name: string, description: string, externalApplicationUrl: string }): Observable<Application> {
    return this.http.put<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`, payload).pipe(
      map(res => res as Application)
    )
  }

  delete$(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`)
  }

  listUsers$(id: number): Observable<ApplicationUser[]> {
    return this.http.get<ApplicationUser[]>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}/users`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationType, ApplicationUser, IApplication } from '@gamify/shared';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APPLICATIONS_API_PATH = '/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  list$(): Observable<IApplication[]> {
    return this.http.get<IApplication[]>(`${environment.apiUrl}${APPLICATIONS_API_PATH}`);
  }

  get$(id: number): Observable<IApplication> {
    return this.http.get<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`);
  }

  create$(payload: { name: string, applicationType: ApplicationType, description: string, externalApplicationUrl?: string }): Observable<IApplication> {
    return this.http.post<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}`, payload);
  }

  update$(id: number, payload: { name: string, description: string, externalApplicationUrl: string }): Observable<IApplication> {
    return this.http.put<IApplication>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`, payload);
  }

  delete$(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}`)
  }

  listUsers$(id: number): Observable<ApplicationUser[]> {
    return this.http.get<ApplicationUser[]>(`${environment.apiUrl}${APPLICATIONS_API_PATH}/${id}/users`)
  }
}

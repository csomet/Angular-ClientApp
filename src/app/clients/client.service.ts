import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Client } from './client';
import {of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ClientService {

  private endpoint:string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type': 'Application/json'})

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.endpoint);
  }

  create(client: Client):  Observable<Client> {
    return this.http.post<Client>(this.endpoint, client, {headers: this.httpHeaders});

  }

  getClient(id): Observable<Client> {
    return this.http.get<Client>(`${this.endpoint}/${id}`)
  }

  update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.endpoint}/${client.id}`, client, {headers: this.httpHeaders})
  }

  delete(id): Observable<Client>{
    return this.http.delete<Client>(`${this.endpoint}/${id}`, {headers: this.httpHeaders});
  }
}

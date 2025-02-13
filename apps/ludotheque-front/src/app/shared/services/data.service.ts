import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private readonly httpClient: HttpClient) { }

  sendGetRequest<T>(command: string){
    return this.httpClient.get<T>(environment.apiURL + command);
  }

  sendPostRequest<T>(command: string, body: unknown){
    return this.httpClient.post<T>(environment.apiURL + command, body);
  }

  sendDeleteRequest<T>(command: string){
    return this.httpClient.delete<T>(environment.apiURL + command);
  }
}

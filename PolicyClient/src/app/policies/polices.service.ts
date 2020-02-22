import { Injectable } from '@angular/core';
import { Policy } from './policy'
import { HttpClient } from '@angular/common/http'

const baseUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})

export class PolicesService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const token = 'ENTER TOKEN HERE';

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getPolicies() {
    return this.request('get', `${baseUrl}/policies`);
  }
}
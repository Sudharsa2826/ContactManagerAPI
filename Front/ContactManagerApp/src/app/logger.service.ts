import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logUrl = 'http://localhost:5000/api/Log';

  constructor(private http: HttpClient) { }

  log(message: string): void {
    console.log(message);
    this.http.post(this.logUrl, { message }).subscribe();
  }
}

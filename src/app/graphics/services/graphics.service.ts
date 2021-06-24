import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialUsers } from '../interfaces/graphic.interface';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraphicsService {
  constructor(private http: HttpClient) {}

  getSocialUsers(): Observable<SocialUsers> {
    const url: string = 'http://localhost:3000/grafica';
    return this.http.get<SocialUsers>(url);
  }

  getSocialUsersDonaData(): Observable<{ labels: string[]; values: number[] }> {
    return this.getSocialUsers().pipe(
      delay(1500),
      map((data) => {
        return { labels: Object.keys(data), values: Object.values(data) };
      })
    );
  }
}

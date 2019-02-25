import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly aboutUrl = 'api/about';

  constructor(private readonly http: HttpClient) {}

  loadContent(): Observable<string> {
    return this.http.get(this.aboutUrl, { responseType: 'text' });
  }
}

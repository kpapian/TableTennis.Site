import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaCoach } from './spa-coach.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoachesService {

    private readonly coachesUrl = `/api/coaches`;

    constructor(private readonly http: HttpClient) { }

    getCoaches(): Observable<SpaCoach[]> {
        return this.http.get<SpaCoach[]>(this.coachesUrl);
    }
}

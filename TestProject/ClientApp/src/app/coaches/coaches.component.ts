import { Component, OnInit } from '@angular/core';
import { SpaCoach } from './spa-coach.model';
import { CoachesService } from './coaches.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {

  coaches: SpaCoach[] = [];

  constructor(private readonly coachesService: CoachesService) { }

  ngOnInit() {
    this.coachesService.getCoaches().subscribe(
      (coaches: SpaCoach[]) => {
        this.coaches = coaches;
      }
    );
  }
}

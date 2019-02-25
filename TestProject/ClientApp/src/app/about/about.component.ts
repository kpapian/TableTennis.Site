import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content = '';

  constructor(private readonly aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.loadContent().subscribe(content => this.content = content);
  }

}

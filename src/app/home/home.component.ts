import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { fade } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade
  ],
})
export class HomeComponent implements OnInit {
  title = 'AngularApp';

  public now: Date = new Date();

  constructor(private router: Router) {

    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {

  }

  goToEmployees() {
    this.router.navigate(['Employees']);
  }

}

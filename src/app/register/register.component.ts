import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        alert('You are successfully registered!');
        window.location.href = '/Employees';
      }
    });
  }

}

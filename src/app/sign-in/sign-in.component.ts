import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
        alert('You are successfully signed in!');
        window.location.href = '/Employees';
      }
    });
  }

}

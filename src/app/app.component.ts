import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean;

  items: Observable<any[]>;

  constructor(db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.items = db.collection('items').valueChanges();

    this.afAuth.user.subscribe(n => {
      this.isLoggedIn = !!n
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    alert('You are successfully signed out!');
    this.router.navigate(['/Home']);
  }


}

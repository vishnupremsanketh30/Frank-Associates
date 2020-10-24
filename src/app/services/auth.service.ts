import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false
  constructor(public fireauth: AngularFireAuth, private router: Router) { }

  async signin(email: string, password: string){
    await this.fireauth.auth.signInWithEmailAndPassword(email,password).then(user=>
      {
        this.isLoggedIn=true
      console.log('it worked',email)}


      )

  }

  logout(){
    this.fireauth.auth.signOut()
  }
}

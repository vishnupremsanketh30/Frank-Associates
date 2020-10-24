import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  isloggedin: boolean
  constructor(private auth: AuthService, private router:Router, private postService: PostService) { }

  ngOnInit(): void {
  }
  signIn(email: string, password: string){
    this.auth.signin(email,password)
    console.log(email)
    this.isloggedin = false;
    this.router.navigate(['/postitem']);

  }
  signOut(){
    this.auth.logout();
    this.isloggedin=true;
  }

  createPost(){

  }

}

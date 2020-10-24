import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  isNewsClicked:  boolean
  isArticlesClicked: boolean
  isNewsPostClicked : boolean
  islogohide: boolean
isloggedin : boolean
  posts : Post[];

  postClicked :Post= {
    title:'',
    description:''
  }
  //constructor(private postService : PostService) { }
  constructor(private postService: PostService, private firestore: AngularFirestore) { this.isNewsClicked=false;
  this.isNewsPostClicked=false;
  this.islogohide = false;
  this.isArticlesClicked = false;
  }
  //posts;
  ngOnInit(){
    this.postService.getPosts().subscribe(posts => {
     // console.log(posts)
    this.posts = posts
    console.log('posts',this.posts)
    })
  }

  displayNews(){
    this.isNewsClicked=true;
    this.islogohide = true;
    this.isNewsPostClicked=false;
  }

  displayNewsPost(event, post){
    this.isNewsPostClicked=true;
    this.isNewsClicked=false;
    this.islogohide = true;
    this.postClicked.title = post.title
    this.postClicked.description = post.description
  }

  displayArticles(){
    this.isArticlesClicked =true;
    this.islogohide = true;
    this.isNewsPostClicked=false;
    this.isNewsClicked = false
  }

}



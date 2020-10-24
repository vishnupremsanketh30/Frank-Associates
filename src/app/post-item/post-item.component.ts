import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  post : Post = {
    title: '',
    description:''
  }
  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.post.title!=''&& this.post.description!=''){
      this.postService.createPost(this.post)
    }
  }

}

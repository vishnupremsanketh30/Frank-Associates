import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {Post} from '../models/post';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>

  constructor(private http: HttpClient, public firestore: AngularFirestore) {
    this.postCollection=this.firestore.collection('users');
  }

  //postUrl = 'localhost:3000/posts';

/*   getPost(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.postUrl);

  } */
  getPosts() {
    //return this.firestore.collection("users").valueChanges();
    return this.firestore.collection("users").snapshotChanges().pipe(map(changes => {
      return changes.map( a => {
        const data =a.payload.doc.data() as Post;
        data.id = a.payload.doc.id;
        return data;

      }

      )
    }))

  }

  createPost(post : Post){
    this.postCollection.add(post)
  }
}

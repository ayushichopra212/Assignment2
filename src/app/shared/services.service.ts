import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './models/Posts';
import posts from '../shared/mockData/posts.json';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  posts : Array<object> = posts.data

  constructor(private http : HttpClient) {
   }

  getPosts(){
    // return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
   return of(this.posts)
  } 
}

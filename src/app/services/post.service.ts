import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }

  getSinglePost(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts/${id}`);
  }

  getUserPosts(id: string): Observable<any> {
    const params = new HttpParams().set('userId', id);
    return this.http.get(`${environment.apiUrl}/posts/`, {params});
  }

  getComments(id: string): Observable<any> {
    const params = new HttpParams().set('postId', id);
    return this.http.get(`${environment.apiUrl}/comments/`, {params});
  }

}

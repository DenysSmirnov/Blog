import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  public postList: Array<any> = [];

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.userId) {
        this.postService.getUserPosts(params.userId).pipe(take(1)).subscribe(posts => {
          this.postList = posts;
        });
      } else {
        this.postService.getPosts().pipe(take(1)).subscribe(posts => {
          this.postList = posts;
        });
      }
    });
  }

}

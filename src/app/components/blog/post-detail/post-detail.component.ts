import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public post: any;
  public comments: Array<any>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postService.getSinglePost(+params.id).pipe(take(1)).subscribe((data: any) => {
        this.post = data;
      });
      this.postService.getComments(params.id).pipe(take(1)).subscribe((data: Array<any>) => {
        this.comments = data;
      });
    });
  }

}

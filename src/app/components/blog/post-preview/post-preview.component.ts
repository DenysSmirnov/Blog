import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() postList: any;
  @Output() userPosts = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getUserPosts(event) {
    this.userPosts.emit(event);
  }
}

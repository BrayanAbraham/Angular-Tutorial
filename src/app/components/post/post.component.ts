import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    standalone: false
})
export class PostComponent implements OnInit {
  post: Post | void;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    this.post = undefined;
  }

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe((post) => (this.post = post));
  }
}

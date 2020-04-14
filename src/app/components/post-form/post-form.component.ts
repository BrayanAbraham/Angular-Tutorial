import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        console.log(post);
      });
    }
  }
}

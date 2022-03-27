import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css'],
    standalone: false
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostsService) {
    this.currentPost = { id: 0, title: '', body: '' };
    this.isEdit = false;
  }

  ngOnInit(): void {}

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService
        .savePost({ title, body } as Post)
        .subscribe((post) => this.newPost.emit(post));
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe((post) => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}

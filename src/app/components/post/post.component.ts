import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InputTextareaModule} from "primeng/inputtextarea";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {DividerModule} from "primeng/divider";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {PostService} from "../../services/post.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    InputTextareaModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DividerModule,
    Button,
    CardModule,
    NgForOf,
    AvatarModule,
    NgOptimizedImage
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges {
  posts: any[] = [];
  @Input() refreshPosts!: boolean;

  constructor(private postService: PostService) { }

  public ngOnInit(): void {
    this.getPosts();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['refreshPosts'] && this.refreshPosts) {
      this.getPosts();
    }
  }

  public deletePost(): void {
    this.postService.delete().subscribe({
      next: () => {
        this.getPosts();
        // this.posts = this.posts.filter(post => post.id !== postId);
        console.log('Post deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting post:', error);
      }
    });
  }

  private getPosts(): void {
    this.postService.getAll().subscribe({
      next: (response) => {
        this.posts = response.reverse();
        console.log('Posts fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }
}

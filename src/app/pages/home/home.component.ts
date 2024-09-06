import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {PostComponent} from "../../components/post/post.component";
import {FollowComponent} from "../../components/follow/follow.component";
import {TabViewModule} from "primeng/tabview";
import {CreatePostComponent} from "../../components/create-post/create-post.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {PostsOfFollowingComponent} from "../../components/posts-of-following/posts-of-following.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    PostComponent,
    FollowComponent,
    TabViewModule,
    CreatePostComponent,
    FooterComponent,
    PostsOfFollowingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {
  }
}

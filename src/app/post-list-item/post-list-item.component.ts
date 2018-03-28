import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;
  
  constructor(private postService: PostService) { 
  }

  ngOnInit() {
  }
  
  onLoveIt() {
	this.postService.lovePost(this.index);
  }
  
  onDontLoveIt() {
	this.postService.dontLovePost(this.index);
  }
  
  onDeletePost() {
	 this.postService.deletePost(this.index);
  }

}

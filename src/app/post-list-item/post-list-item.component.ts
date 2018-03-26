import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  
  constructor() { 
  }

  ngOnInit() {
  }
  
  onLoveIt() {
    this.post.loveIts++;
  }
  
  onDontLoveIt() {
    this.post.loveIts--;
  }

}

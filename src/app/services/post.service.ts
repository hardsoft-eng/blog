import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
	
  postsSubject = new Subject<Post[]>();
  
  private posts: Post[] = [
    {
      title: 'Mon premier post',
      content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
	  loveIts: 0, 
	  created_at: new Date()
	},
    {
      title: 'Mon deuxième post',
      content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
	  loveIts: 0,
	  created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.',
	  loveIts: 0,
	  created_at: new Date()	  
	}
  ];

  constructor() { }
  
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }
  
  addPost(title: string, content: string) {
	const post = {
      title: '',
      content: '',
	  loveIts: 0,
	  created_at: new Date()
    };

    post.title = title;
    post.content = content;

	this.posts.push(post);
	this.emitPostSubject();
  }
   
  deletePost(index: number) {
	if (index > -1) this.posts.splice(index, 1);
	this.emitPostSubject();
  }
  
  lovePost(index: number) {
	if (index > -1) this.posts[index].loveIts++;
	this.emitPostSubject();
  }
  
  dontLovePost(index: number) {
	if (index > -1) this.posts[index].loveIts--;
	this.emitPostSubject();
  }

}

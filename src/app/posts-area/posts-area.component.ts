import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from './posts.interface';

@Component({
  selector: 'app-posts-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-area.component.html',
  styleUrl: './posts-area.component.css',
})
export class PostsAreaComponent {
  post1: Post = {
    profileImg: 'Unknown_person.jpg',
    userName: 'user01',
    textContent: 'Some text about some subject',
    subject: 'subject',
    duration: 30,
    date: 'Jul 11 2024,  22:40',
  };

  posts = [this.post1, this.post1, this.post1, this.post1];
}

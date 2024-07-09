import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-area.component.html',
  styleUrl: './posts-area.component.css',
})
export class PostsAreaComponent {
  posts = ['post1', 'post2', 'post3', 'post4'];
}

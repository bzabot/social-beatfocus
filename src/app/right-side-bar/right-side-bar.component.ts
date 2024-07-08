import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.css',
})
export class RightSideBarComponent {
  users = ['another_user1', 'another_user2', 'another_user3', 'another_user4'];
}

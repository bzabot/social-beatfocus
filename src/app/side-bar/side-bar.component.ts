import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  imports: [LogoComponent, MenuComponent, SearchComponent, ProfileComponent],
})
export class SideBarComponent {}

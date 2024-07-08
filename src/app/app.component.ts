import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MatSidenavModule, SideBarComponent, RightSideBarComponent],
})
export class AppComponent {
  title = 'social-bf';
}

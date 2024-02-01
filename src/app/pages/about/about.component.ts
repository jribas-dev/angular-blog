import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

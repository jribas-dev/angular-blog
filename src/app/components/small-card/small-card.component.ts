import { Component, Input } from '@angular/core';
import { img300x120Base64 } from '../../data/dataFake'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent {
  smallCardImageBase64: String = img300x120Base64

  @Input()
  smallCardAuthorDate: String  = ""

  @Input()
  smallCardDescription: String = ""

  @Input()
  smallCardSlug: String = ""
}

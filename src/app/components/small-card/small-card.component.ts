import { Component, Input } from '@angular/core';
import { img300x120Base64 } from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
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

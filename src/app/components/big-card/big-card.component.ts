import { Component, Input } from '@angular/core';
import { img600x400Base64 } from '../../data/dataFake'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
  bigCardImageBase64: String = img600x400Base64

  @Input()
  bigCardTitle: String = ""

  @Input()
  bigCardDescription: String = ""

  @Input()
  bigCardSlug: String = ""
}

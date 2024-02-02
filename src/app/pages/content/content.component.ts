import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake, img600x400Base64 } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, MenuBarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {
  contentImage = img600x400Base64
  contentAuthor: String = ""
  contentTitle: String = ""
  contentText: String = ""

  private slug: String | null = ""

  constructor (
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.slug = value.get("slug")
    })

    this.setValuesToComponent(this.slug)
  }

  setValuesToComponent(slug: String | null) {
    const result = dataFake.filter(content => content.slug === slug)
    this.contentAuthor = result[0].authordate
    this.contentTitle = result[0].title
    this.contentText  = result[0].text
  }

}

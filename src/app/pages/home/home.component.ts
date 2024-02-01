import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent  {
  private contents = dataFake;
  featureContents = this.contents.filter( content => content.feature === true)
  otherContents = this.contents.filter( content => content.feature === false)
}

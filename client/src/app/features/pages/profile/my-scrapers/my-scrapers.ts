import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMyScrapersRepository } from './my-scrapers.repository';

@Component({
  selector: 'app-my-scrapers',
  imports: [CommonModule],
  templateUrl: './my-scrapers.html',
  styleUrl: './my-scrapers.scss'
})
export class MyScrapers {
  public scrapersRepo = ProfileMyScrapersRepository;
}

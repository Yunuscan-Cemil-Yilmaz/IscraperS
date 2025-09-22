import { Component } from '@angular/core';
import { AccessibleApiRepository } from './accessible-api.repository';

@Component({
  selector: 'app-accessible-settings',
  imports: [],
  templateUrl: './accessible-settings.html',
  styleUrl: './accessible-settings.scss'
})
export class AccessibleSettings {
  public repo = AccessibleApiRepository;
}

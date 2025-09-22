import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-account-settings',
  imports: [CommonModule, RouterLink],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss'
})
export class AccountSettings {
  showEdit = false;

  openPanel() {
    this.showEdit = true;
  }

  closePanel() {
    this.showEdit = false;
  }

  ngOnDestroy(): void {
    this.showEdit = false;
  }
}

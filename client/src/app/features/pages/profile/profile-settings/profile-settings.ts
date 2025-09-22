import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettings } from "./account-settings/account-settings";

@Component({
  selector: 'app-profile-settings',
  imports: [CommonModule, AccountSettings],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss'
})
export class ProfileSettings {
}

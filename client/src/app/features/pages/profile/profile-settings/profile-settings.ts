import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettings } from "./account-settings/account-settings";
import { AccessibleSettings } from "./accessible-settings/accessible-settings";

@Component({
  selector: 'app-profile-settings',
  imports: [CommonModule, AccountSettings, AccessibleSettings],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss'
})
export class ProfileSettings {
}

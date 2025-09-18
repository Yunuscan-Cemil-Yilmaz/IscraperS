import { Component } from '@angular/core';
import { ProfileNavbar } from "./profile-navbar/profile-navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [ProfileNavbar, RouterOutlet],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

}

import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Topbar } from "../topbar/topbar";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Topbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}

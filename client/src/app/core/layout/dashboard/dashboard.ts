import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Topbar } from "../topbar/topbar";
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Topbar, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}

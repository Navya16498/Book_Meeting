import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private Router1: Router) {}
  name: string = '';
  password: string = '';
  login() {
    if (this.name && this.password) {
      this.Router1.navigate(['./book']);
    }
  }
}

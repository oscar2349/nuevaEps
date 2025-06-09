import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet, NavbarComponent],
templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'user-app';

  constructor(private router: Router) {}
}


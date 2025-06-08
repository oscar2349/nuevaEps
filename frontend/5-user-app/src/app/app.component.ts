import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from './components/solicitud-app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'user-app';
}

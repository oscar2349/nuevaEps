import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Solicitud } from '../../models/solicitud';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  @Input() solicitud: Solicitud[] = [];
  @Input() paginator = {}
}

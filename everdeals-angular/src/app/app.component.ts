import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { NavbarComponent } from './components/navbar/navbar.component'; // Navbar

@Component({
  selector: 'app-root',
  standalone: true, // Standalone Component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule, // Importa RouterModule para habilitar <router-outlet>
    NavbarComponent // Navbar
  ],
})
export class AppComponent {
  title = 'everdeals-angular';
}


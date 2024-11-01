import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';  // Importa NgIf directamente
import { AdminComponent } from './components/admin/admin.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NgIf, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'GREENTEC';
  constructor(public router: Router) { }


  goToLogin() {
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  goToAdmin() {
    this.router.navigate(['/admin']);  // Redirige a la página de login
  }


}

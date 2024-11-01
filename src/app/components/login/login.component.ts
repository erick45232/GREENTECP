import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Router } from '@angular/router';
import { LoginEmpleadosComponent } from '../login-empleados/login-empleados.component';
import { LoginAdminComponent } from '../../login-admin/login-admin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LoginEmpleadosComponent, LoginAdminComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      // Método que maneja el envío del formulario
  onSubmit() {
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica para autenticar al usuario o manejar los datos
  }
  constructor(private router: Router) {}
  
  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

  LoginEmpleado() {
    this.router.navigate(['/LoginEmpleado']);  // Redirige a la ruta raíz (AppComponent)
  }

  LoginAdmin() {
    this.router.navigate(['/LoginAdmin']); // Te mandará al login de admninistradores
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { LoginComponent } from '../login/login.component';
import { LoginAdminComponent } from '../../login-admin/login-admin.component';

@Component({
  selector: 'app-login-empleados',
  standalone: true,
  imports: [FormsModule, LoginComponent, LoginAdminComponent],
  templateUrl: './login-empleados.component.html',
  styleUrl: './login-empleados.component.css'
})

export class LoginEmpleadosComponent {
      // Método que maneja el envío del formulario
      onSubmit() {
        console.log('Formulario enviado');
        // Aquí puedes agregar la lógica para autenticar al usuario o manejar los datos
      }
      constructor(private router: Router) {}
      
      goToHome() {
        this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
      }

      GoToLogin(){
        this.router.navigate(['/login']);  // Redirige a la ruta raíz (AppComponent)
      }
      LoginAdmin() {
        this.router.navigate(['/LoginAdmin']); // Te mandará al login de admninistradores
      }
}

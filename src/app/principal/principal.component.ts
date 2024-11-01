import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {


  constructor(private router: Router) {}

  Principal(){
    this.router.navigate(['/Principal']);
  }

  goToHome() {
    this.router.navigate(['/']);  // Redirige a la ruta raíz (AppComponent)
  }

}

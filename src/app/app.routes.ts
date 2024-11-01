import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginEmpleadosComponent } from './components/login-empleados/login-empleados.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RecolectoresComponent } from './recolectores/recolectores.component';
import { RutasComponent } from './rutas/rutas.component';
import { ProductosComponent } from './productos/productos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AsignarRutasComponent } from './asignar-rutas/asignar-rutas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


export const routes: Routes = [
    
    { path: 'login', component: LoginComponent },  // Ruta para login
    { path: 'admin', component: AdminComponent },  
    { path: 'LoginEmpleado', component: LoginEmpleadosComponent },  
    { path: 'LoginAdmin', component: LoginAdminComponent},// Te manda al login de administradores
    { path: 'Principal', component: PrincipalComponent},
    { path: 'Usuarios', component: UsuariosComponent},
    { path: 'Recolectores', component: RecolectoresComponent},
    { path: 'Rutas', component: RutasComponent},
    { path: 'Productos', component: ProductosComponent},
    { path: 'Catalogo', component: CatalogoComponent},
    { path: 'AsignarRutas',component: AsignarRutasComponent},
    { path: 'Estadisticas', component: EstadisticasComponent}


   

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
import {  OnInit } from '@angular/core';

interface Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: string;
  estado: string;
  municipio: string;
  cp: string;
  calle: string;
  nExt: string;
  nInt: string;
  colonia: string;
  correo: string;
  telefono: string;
  referencias: string;
}

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  filters = {
    nombre: '',
    apellidos: '',
    edad: '',
    sexo: '',
    estado: '',
    municipio: '',
    cp: '',
    calle: '',
    nExt: '',
    nInt: '',
    colonia: '',
    correo: '',
    telefono: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Simular la obtención de datos
    this.clientes = [
      { id: 1, nombre: 'Juan', apellidos: 'Pérez', edad: 30, sexo: 'M', estado: 'CDMX', municipio: 'Coyoacán', cp: '04000', calle: 'Insurgentes', nExt: '123', nInt: '1', colonia: 'Centro', correo: 'juan@example.com', telefono: '5555555555', referencias: 'N/A' },
      { id: 2, nombre: 'Ana', apellidos: 'Martínez', edad: 25, sexo: 'F', estado: 'Jalisco', municipio: 'Guadalajara', cp: '44100', calle: 'Av. Vallarta', nExt: '456', nInt: '', colonia: 'Zapopan', correo: 'ana@example.com', telefono: '5555555556', referencias: 'N/A' },
      // Más clientes aquí...
    ];

    this.filteredClientes = [...this.clientes];
  }

  applyFilters() {
    this.filteredClientes = this.clientes.filter(cliente => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters as any)[key].toLowerCase();
        const clienteValue = (cliente as any)[key].toString().toLowerCase();
        return clienteValue.includes(filterValue);
      });
    });
  }

  eliminarCliente(id: number) {
    // Aquí puedes implementar la lógica para eliminar un cliente.
    // Puedes mostrar una alerta de confirmación, y luego eliminar el cliente de la lista.
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    this.applyFilters(); // Actualizar la lista filtrada después de eliminar
  }
}


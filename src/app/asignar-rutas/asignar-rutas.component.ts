import { Component } from '@angular/core';

@Component({
  selector: 'app-asignar-rutas',
  standalone: true,
  imports: [],
  templateUrl: './asignar-rutas.component.html',
  styleUrl: './asignar-rutas.component.css'
})
export class AsignarRutasComponent {

}
import {  OnInit } from '@angular/core';

interface Cliente {
  nombre: string;
  apellidos: string;
  telefono: string;
}

interface Empleado {
  nombre: string;
  apellidos: string;
  correo: string;
  clientes: Cliente[];
}

@Component({
  selector: 'app-empleado-clientes',
  templateUrl: './asignar-rutas.component.html',
  styleUrls: ['./asignar-rutas.component.css']
})
export class EmpleadoClientesComponent implements OnInit {

  empleados: Empleado[] = [
    {
      nombre: 'Juan',
      apellidos: 'Pérez',
      correo: 'juan@example.com',
      clientes: [
        { nombre: 'Carlos', apellidos: 'López', telefono: '1234567890' },
        { nombre: 'Ana', apellidos: 'Martínez', telefono: '0987654321' }
      ]
    },
    {
      nombre: 'Ana',
      apellidos: 'García',
      correo: 'ana@example.com',
      clientes: [] // Sin clientes asignados
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  asignarCliente() {
    console.log("Función para asignar cliente a un empleado.");
    // Lógica para asignar un cliente a un empleado
  }

  reasignarCliente() {
    console.log("Función para reasignar clientes.");
    // Lógica para reasignar clientes
  }
}

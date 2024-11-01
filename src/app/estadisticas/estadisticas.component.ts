import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class DashboardComponent implements OnInit {
  graphHtml: string = '<!-- Aquí puedes insertar el HTML/SVG de tu gráfico -->';
  graph2Html: string = '<!-- Aquí puedes insertar el HTML/SVG del segundo gráfico -->';

  constructor() { }

  ngOnInit(): void {
    // Lógica para inicializar o cargar gráficos dinámicos
    // Ejemplo: Cargar datos para gráficos o generar contenido en graphHtml y graph2Html
  }
}

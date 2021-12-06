import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MallaService } from '../services/malla.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  constructor(private mallaService: MallaService) {}

  buscar() {
    this.mallaService.buscar();
  }
}

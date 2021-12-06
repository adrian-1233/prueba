import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Welcome } from '../interface/malla';
import { Busqueda } from '../busqueda/interface/busqueda';

@Injectable({
  providedIn: 'root',
})
export class MallaService {
  public resultados: Welcome[] = [];
  public lista: Busqueda[] = [];
  private apiKey: string =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cudmlhbWF0aWNhLmNvbSIsImF1ZCI6IjkiLCJqdGkiOiI5MmYyOWUwNDdiYWYxOTgzODgwODM1YmMwMTAxMWJkYiIsImlhdCI6MTYzODgyNTc3MywibmJmIjoxNjM4ODI1NzczLCJleHAiOjE2Mzg5MTIxNzMsImRhdGEiOnsiY29taWQiOiIxMTEiLCJ1c2VpZCI6IjkiLCJjb2RwZXIiOiIyNyIsImNvZHBlcmYiOiIxIn19.v6m870HL8FzBhFHhcjZESX8yxSklFzZMekdIBFdXriI';
  private servicioUrl: string = 'http://localhost:8008/api/v1/';
  constructor(private http: HttpClient) {}

  index() {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('evento=DETALLE/id_curso', '0');
    this.http
      .get<Welcome>(`${this.servicioUrl}`, { params })
      .subscribe((resp) => {
        this.resultados = resp;
      });
  }
  buscar(data: string | number | boolean) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('evento=DETALLE/id_curso', data);

    this.http
      .get<Welcome>(`${this.servicioUrl}`, { params })
      .subscribe((resp) => {
        this.resultados = resp;
      });
  }
}

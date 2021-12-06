import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    TablaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MallaModule { }

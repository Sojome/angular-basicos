import { Component, EventEmitter, Input, Output, ɵComponentDef } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }

  // @Output() onNuevoPersonajes: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // trim borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // console.log(this.nuevo);
    // this.onNuevoPersonajes.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}

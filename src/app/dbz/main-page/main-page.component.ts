import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    // trim borrar espacios en blanco
    if (this.nuevo.nombre.trim.length === 0) {
      this.personaje.push(this.nuevo);
      // console.log(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      }

    }
  }
}
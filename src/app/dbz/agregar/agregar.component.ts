import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzSevice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: 'Trueno',
    poder: 0
  }

  constructor(private dbzService: DbzSevice){}

  agregar() {
     if(this.nuevo.nombre.trim() === '') return;

     this.dbzService.agregarPersonaje( this.nuevo);

     this.nuevo = { 
      nombre: '',
     poder: 0
    }
  }


}

import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {

  //  este decorador nos permite emitir la variable en este caso onEnter (nosotros definimos el nombre), a otros componentes la variable que se le manda como parametro
 @Output() onEnter: EventEmitter <string> = new EventEmitter();

 termino: string = '';

 buscar(){

    this.onEnter.emit(this.termino);

 }
}

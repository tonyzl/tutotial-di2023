import { Component } from '@angular/core';

@Component({
  selector: 'app-c-parent',
  templateUrl: './c-parent.component.html',
  styleUrls: ['./c-parent.component.css']
})
export class CParentComponent {
  valorContador: number=0;
  mensajeP:string="mensaje desde el padre";
  sumar(){
    this.valorContador++;
  }
  restar(){
    this.valorContador--;
  }
}

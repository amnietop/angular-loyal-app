import { Component, OnInit } from '@angular/core';




interface Articulo {
  id:number,
  titulo:string,
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  nombre: string = 'Anp';
  edad:number = 25;
  alto:boolean = true;

  articulo: Articulo ={
    id:1,
    titulo:'micro'
  }
  lista:string[] = [];

  constructor() {
    this.lista.push('primero');
    this.lista.push('segundo');
    this.lista.push('tercero');

    this.edad = 15;
  }

  ngOnInit(): void {
  }

  getArticulo():Articulo {
    return this.articulo;
  }

  sumar(a:number,b:number){
    return a + b;
  }

}

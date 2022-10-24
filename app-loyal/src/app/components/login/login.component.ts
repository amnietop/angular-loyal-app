import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


interface IHablar {
  hablar (palabra:string):void;
}

class Persona implements IHablar {

hablar(palabra: string): void {

}

}

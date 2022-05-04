import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {

  mesesDoAno: any[] = [
    {nomeMes: 'Janeiro' , valor: 1, marcado: false},
    {nomeMes: 'Fevereiro' , valor: 2, marcado: false},
    {nomeMes: 'Março' , valor: 3, marcado: false},
    {nomeMes: 'Abril' , valor: 4, marcado: false}, 
  ] 

  constructor() { }

  ngOnInit() {

  }

  exibirMesesDoAno(){
    console.log(this.mesesDoAno)
  }
}
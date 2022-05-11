import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollalfabeto',
  templateUrl: './scrollalfabeto.page.html',
  styleUrls: ['./scrollalfabeto.page.scss'],
})
export class ScrollalfabetoPage implements OnInit {

  alfabeto=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  limite = 5;

  constructor() { }

  ngOnInit() {
  }

  atualizaalfabeto(alfabetoScrollEvent:any){
    this.limite +=5;
    alfabetoScrollEvent.target.complete();
  }
}

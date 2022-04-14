import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atualizacoes',
  templateUrl: './atualizacoes.page.html',
  styleUrls: ['./atualizacoes.page.scss'],
})
export class AtualizacoesPage implements OnInit {

  constructor(private navController : NavController) { }

  showPageAtualizacoes2(){
    this.navController.navigateForward('atualizacoes2');
  }

  ngOnInit() {
  }

}

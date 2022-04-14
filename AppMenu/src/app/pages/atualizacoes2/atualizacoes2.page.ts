import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atualizacoes2',
  templateUrl: './atualizacoes2.page.html',
  styleUrls: ['./atualizacoes2.page.scss'],
})
export class Atualizacoes2Page implements OnInit {

  constructor(private navController: NavController) { }

  showPageAtualizacoes(){
    this.navController.navigateForward('atualizacoes');
  }
  ngOnInit() {
  }

}

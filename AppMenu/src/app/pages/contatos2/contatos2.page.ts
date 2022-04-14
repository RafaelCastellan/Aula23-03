import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contatos2',
  templateUrl: './contatos2.page.html',
  styleUrls: ['./contatos2.page.scss'],
})
export class Contatos2Page implements OnInit {

  constructor(private navController : NavController) { }

  showPageContatos(){
    this.navController.navigateForward('contatos');
  }
  ngOnInit() {
  }

}

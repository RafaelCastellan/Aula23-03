import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  constructor( private navController: NavController) { }

  showPageContatos2(){
    this.navController.navigateForward('contatos2');
  }
  ngOnInit() {
  }

}

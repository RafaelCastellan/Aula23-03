import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rascunho',
  templateUrl: './rascunho.page.html',
  styleUrls: ['./rascunho.page.scss'],
})
export class RascunhoPage implements OnInit {

  constructor(private navController: NavController) { }

  showPageRascunho2(){
    this.navController.navigateForward('rascunho2');
    }
  ngOnInit() {
  }

}

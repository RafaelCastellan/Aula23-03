import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async actionsheet(){
    const actionsheet =  await this.actionSheetCtrl.create({
      header: 'albuns',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () =>{
          console.log('Delete clicked');
        }
      },{
        text: 'share',
        icon: 'share',
        data:10,
        handler: () =>{
          console.log('Share clicked');
        }
      },{
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data Value',
        handler: () =>{
          console.log('Play clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart',
        handler: () =>{
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel clicked');
        }
      }]  
    });
    await actionsheet.present();
  }
}

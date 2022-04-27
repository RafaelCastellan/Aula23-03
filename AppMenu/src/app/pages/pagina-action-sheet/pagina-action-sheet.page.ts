import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-action-sheet',
  templateUrl: './pagina-action-sheet.page.html',
  styleUrls: ['./pagina-action-sheet.page.scss'],
})
export class PaginaActionSheetPage implements OnInit {

  constructor(private paginaactionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  async paginaactionsheet(){
    const paginaactionsheet =  await this.paginaactionSheetCtrl.create({
      header: 'albuns',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Excluir',
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
        text: 'Compartilhar',
        icon: 'share',
        data:10,
        handler: () =>{
          console.log('Share clicked');
        }
      },{
        text: 'Jogar (modal Aberto)',
        icon: 'caret-forward-circle',
        data: 'Data Value',
        handler: () =>{
          console.log('Play clicked');
        }
      },{
        text: 'Favorito',
        icon: 'heart',
        handler: () =>{
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel clicked');
        }
      }]  
    });
    await paginaactionsheet.present();
  }
}

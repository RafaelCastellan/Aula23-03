import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Botões', url: '/botao', icon: 'construct' },
    { title: 'Página de Botões 1', url: '/botao1', icon: 'construct' },
    { title: 'Página de Botões 2', url: '/botao2', icon: 'construct' },
    { title: 'Página de Botões 3', url: '/botao3', icon: 'construct' },
    { title: 'Página de Botões 4', url: '/botao4', icon: 'construct' },
    { title: 'Página de Botões 5', url: '/botao5', icon: 'construct' },
    { title: 'Contatos', url: '/contatos', icon: 'person' },
    { title: 'Rascunho', url: '/rascunho', icon: 'reader' },
    { title: 'Social', url: '/social', icon: 'people' },
    { title: 'Atualizações', url: '/atualizacoes', icon: 'alert-circle' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [ 'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

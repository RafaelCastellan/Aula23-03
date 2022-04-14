import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'rascunho',
    loadChildren: () => import('./pages/rascunho/rascunho.module').then( m => m.RascunhoPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./pages/social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'atualizacoes',
    loadChildren: () => import('./pages/atualizacoes/atualizacoes.module').then( m => m.AtualizacoesPageModule)
  },  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'contatos2',
    loadChildren: () => import('./pages/contatos2/contatos2.module').then( m => m.Contatos2PageModule)
  },
  {
    path: 'atualizacoes2',
    loadChildren: () => import('./pages/atualizacoes2/atualizacoes2.module').then( m => m.Atualizacoes2PageModule)
  },
  {
    path: 'rascunho2',
    loadChildren: () => import('./pages/rascunho2/rascunho2.module').then( m => m.Rascunho2PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

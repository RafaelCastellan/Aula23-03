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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

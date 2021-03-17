import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./markdown/markdown.module').then(m => m.MarkdownModule) },
  { path: 'local', loadChildren: () => import('./local/local.module').then(m => m.LocalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

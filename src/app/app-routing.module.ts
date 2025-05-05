import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'question', pathMatch: 'full' },
  { path: 'question', loadChildren: () => import('./web/question/question.module').then(m => m.QuestionModule) },
  { path: 'home', loadChildren: () => import('./web/home/home.module').then(m => m.HomeModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

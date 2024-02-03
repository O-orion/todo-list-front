import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './features/lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaTarefasComponent,
    title: 'Todo list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

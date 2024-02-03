import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListaTarefasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class FeaturesModule { }

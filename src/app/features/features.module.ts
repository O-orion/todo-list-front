import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        ListaTarefasComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule
    ]
})
export class FeaturesModule { }

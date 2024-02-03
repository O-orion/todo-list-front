import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './components/tabela/tabela.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    TabelaComponent
  ]
})
export class SharedModule { }

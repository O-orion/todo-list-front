import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }

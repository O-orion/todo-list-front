import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tarefas: any[] = [
    { name: "tarea1"},
    { name: "tarea1"},
    { name: "tarea1"},
    { name: "tarea1"},
    { name: "tarea1"},
  ]
}

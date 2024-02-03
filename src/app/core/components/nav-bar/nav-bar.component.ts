import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home'
      }
    ]
    this.activeItem = this.items[0];
  }

}

import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      name: 'barras',
      route: '/graphics/bars',
    },
    {
      name: 'double',
      route: '/graphics/double',
    },
    {
      name: 'dona',
      route: '/graphics/dona',
    },
    {
      name: 'dona http',
      route: '/graphics/dona-http',
    },
  ];
}

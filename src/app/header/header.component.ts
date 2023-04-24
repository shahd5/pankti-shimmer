import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItem = [
    {
      route: '/home',
      item: 'HOME'
    },
    {
      route: '/about',
      item: 'ABOUT'
    },
    {
      route: '/portfolio',
      item: 'PORTFOLIO'
    },
    /*    {
          route: '/pricing',
          item: 'PRICING'
        },*/
    {
      route: '/contact',
      item: 'CONTACT'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

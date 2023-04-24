import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {
      id: "1",
      src: './assets/portfolio/BridalMakeupCarsole400*450.jpg',
      alt: 'Side 1',
      title: 'Bridal Makeup',
      link: '/bridal-portfolio'
    },
    {
      id: "2",
      src: './assets/portfolio/hairStyleCarsole400*450.jpg',
      alt: 'Side 2',
      title: 'Hair Style',
      link: '/hair-style'
    },
    {
      id: "3",
      src: './assets/portfolio/PartyMakeupCarsole400*450.jpg',
      alt: 'Side 3',
      title: 'Party Makeup',
      link: '/party-portfolio'
    },
    {
      id: "4",
      src: './assets/portfolio/weddingMakeupCarsole400*450.jpg',
      alt: 'Side 4',
      title: 'Wedding Makeup',
      link: '/wedding-portfolio'
    }
    /*    {
          id: "5",
          src: './assets/images/services/05.jpg',
          alt: 'Side 5',
          title: 'Effect Makeup',
          link: '/effect-portfolio'
        },
        {
          id: "6",
          src: './assets/images/services/06.jpg',
          alt: 'Side 6',
          title: 'Children Face Makeup',
          link: '/children-face-portfolio'
        }*/
  ];
  customOptions: OwlOptions = {
    smartSpeed: 1000,
    margin: 30,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 100,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        touchDrag: true
      },
      400: {
        items: 2,
        touchDrag: true
      },
      760: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}

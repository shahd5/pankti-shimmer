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
      src: './assets/images/services/01.jpg',
      alt: 'Side 1',
      title: 'Eye Makeup',
      link: '/eye-makeup'
    },
    {
      id: "2",
      src: './assets/images/services/02.jpg',
      alt: 'Side 2',
      title: 'Face Makeup',
      link: '/face-makeup'
    },
    {
      id: "3",
      src: './assets/images/services/03.jpg',
      alt: 'Side 3',
      title: 'Hair Makeup',
      link: '/hair-makeup'
    },
    {
      id: "4",
      src: './assets/images/services/04.jpg',
      alt: 'Side 4',
      title: 'Wedding Makeup',
      link: '/wedding-makeup'
    },
    {
      id: "5",
      src: './assets/images/services/05.jpg',
      alt: 'Side 5',
      title: 'Effect Makeup',
      link: '/effect-makeup'
    },
    {
      id: "6",
      src: './assets/images/services/06.jpg',
      alt: 'Side 6',
      title: 'Children Face Makeup',
      link: '/children-face-makeup'
    }
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

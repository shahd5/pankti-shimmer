import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    // Set the title
    this.title.setTitle('Professional Makeup Artist & Hairstylist - Serving VA, MD, NJ, PA, NC, NY');

    // Add meta tags
    this.meta.addTags([
      {
        name: 'description',
        content: 'Professional makeup artist and hairstylist based in Richmond, VA. Providing services across Virginia, Maryland, New Jersey, Pennsylvania, North Carolina, and New York. Specializing in makeup and hairstyles for all ethnicities and offering master classes.'
      },
      {
        name: 'keywords',
        content: 'Makeup Artist, Hairstylist, Richmond VA, Virginia, Maryland, New Jersey, Pennsylvania, North Carolina, New York, Makeup Classes, Hairstyle Classes, All Ethnicities'
      },
      {name: 'author', content: 'Pankti Shimmers'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}

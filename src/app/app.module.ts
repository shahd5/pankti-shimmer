import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AwardsComponent} from './awards/awards.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {PricingComponent} from './pricing/pricing.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {PartyMakeupComponent} from './party-makeup/party-makeup.component';
import {BridalMakeupComponent} from './bridal-makeup/bridal-makeup.component';
import {HairStyleComponent} from './hair-style/hair-style.component';
import {WeddingMakeupComponent} from './wedding-makeup/wedding-makeup.component';
import {EffectMakeupComponent} from './effect-makeup/effect-makeup.component';
import {ChildrenFaceMakeupComponent} from './children-face-makeup/children-face-makeup.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmailService} from "./email.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AwardsComponent,
    ContactComponent,
    ServicesComponent,
    PricingComponent,
    BlogPageComponent,
    BlogPostComponent,
    PartyMakeupComponent,
    BridalMakeupComponent,
    HairStyleComponent,
    WeddingMakeupComponent,
    EffectMakeupComponent,
    ChildrenFaceMakeupComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

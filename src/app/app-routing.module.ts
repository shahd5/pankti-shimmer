import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PricingComponent} from './pricing/pricing.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {PartyMakeupComponent} from './party-makeup/party-makeup.component';
import {BridalMakeupComponent} from './bridal-makeup/bridal-makeup.component';
import {HairStyleComponent} from './hair-style/hair-style.component';
import {WeddingMakeupComponent} from './wedding-makeup/wedding-makeup.component';
import {EffectMakeupComponent} from './effect-makeup/effect-makeup.component';
import {ChildrenFaceMakeupComponent} from './children-face-makeup/children-face-makeup.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'blog-page', component: BlogPageComponent},
  {path: 'blog-post', component: BlogPostComponent},
  {path: 'party-portfolio', component: PartyMakeupComponent},
  {path: 'bridal-portfolio', component: BridalMakeupComponent},
  {path: 'hair-style', component: HairStyleComponent},
  {path: 'wedding-portfolio', component: WeddingMakeupComponent},
  {path: 'effect-portfolio', component: EffectMakeupComponent},
  {path: 'children-face-portfolio', component: ChildrenFaceMakeupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

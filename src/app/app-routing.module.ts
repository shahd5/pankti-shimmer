import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {PricingComponent} from './pricing/pricing.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {EyeMakeupComponent} from './eye-makeup/eye-makeup.component';
import {FaceMakeupComponent} from './face-makeup/face-makeup.component';
import {HairMakeupComponent} from './hair-makeup/hair-makeup.component';
import {WeddingMakeupComponent} from './wedding-makeup/wedding-makeup.component';
import {EffectMakeupComponent} from './effect-makeup/effect-makeup.component';
import {ChildrenFaceMakeupComponent} from './children-face-makeup/children-face-makeup.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'blog-page', component: BlogPageComponent},
  {path: 'blog-post', component: BlogPostComponent},
  {path: 'eye-makeup', component: EyeMakeupComponent},
  {path: 'face-makeup', component: FaceMakeupComponent},
  {path: 'hair-makeup', component: HairMakeupComponent},
  {path: 'wedding-makeup', component: WeddingMakeupComponent},
  {path: 'effect-makeup', component: EffectMakeupComponent},
  {path: 'children-face-makeup', component: ChildrenFaceMakeupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

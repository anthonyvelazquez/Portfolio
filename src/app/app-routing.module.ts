import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

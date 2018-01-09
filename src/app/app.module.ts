import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    AboutPageComponent,
    ProjectPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

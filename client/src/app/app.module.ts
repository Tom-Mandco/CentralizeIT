import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { Routing }       from './app.routing';

import { AccordionModule } from 'primeng/primeng';

import { NavbarComponent, SidebarComponent } from './Shared/index';
import { LandingPageComponent, AddDocumentComponent, SearchDocumentComponent } from './Shared/index';

@NgModule({
  imports:      [ BrowserModule,
                  Routing,
                  HttpModule,
                  AccordionModule ],
  declarations: [ AppComponent,
                  LandingPageComponent,
                  NavbarComponent,
                  SidebarComponent,
                  AddDocumentComponent,
                  SearchDocumentComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
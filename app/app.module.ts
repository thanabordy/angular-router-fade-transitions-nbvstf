import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { KakapoComponent } from './kakapo/kakapo.component';
import { TakaheComponent } from './takahe/takahe.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';
import { AppRoutingModule } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    KakapoComponent, 
    TakaheComponent, 
    FairyTernComponent, NavBarComponent
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }

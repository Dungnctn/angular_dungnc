import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { DameComponent } from './table/dame/dame.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableAvatarComponent,
    DameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

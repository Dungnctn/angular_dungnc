import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { DameComponent } from './table/dame/dame.component';
import { FormComponent } from './form/form.component';
import { AppShowValidateComponent } from './component/app-show-validate/app-show-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableAvatarComponent,
    DameComponent,
    FormComponent,
    AppShowValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

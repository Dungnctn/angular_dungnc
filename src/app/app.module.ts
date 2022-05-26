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
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableAvatarComponent,
    DameComponent,
    FormComponent,
    AppShowValidateComponent,
    UserFormComponent,
    UserListComponent,
    UserComponent,
    ClientLayoutComponent,
    HomeComponent,
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

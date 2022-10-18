import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from "angular-datatables";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './layout/user-sidebar/user-sidebar.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { TableComponent } from './home/table/table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { Errors404Component } from './auth/errors404/errors404.component';
import { Errors500Component } from './auth/errors500/errors500.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
    UserSidebarComponent,
    HomeComponent,
    CardComponent,
    TableComponent,
    UserProfileComponent,
    LoginComponent,
    Errors404Component,
    Errors500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

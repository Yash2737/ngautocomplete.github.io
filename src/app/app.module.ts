import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminChildComponent } from './admin-user/admin-child/admin-child.component';
import { NormalChildComponent } from './normal-user/normal-child/normal-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalUserComponent,
    AdminChildComponent,
    NormalChildComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

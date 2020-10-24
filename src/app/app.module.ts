import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import { environment } from "src/environments/environment";
//import { AngularFireModule } from "@angular/fire";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFirestoreModule } from "@angular/fire/firestore";


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { TaxupdatesComponent } from './taxupdates/taxupdates.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PostItemComponent } from './post-item/post-item.component';

import {FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServicesOfferedComponent,
    TaxupdatesComponent,
    NewsComponent,
    ContactComponent,
    HomeComponent,
    AdminloginComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

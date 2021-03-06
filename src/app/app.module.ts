import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from "@angular/forms";
import { ChatService } from "./providers/chat.service";


import { Observable } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    
  ],
  imports: [
    
    FormsModule,
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule
  ],
  providers: [ChatService],

  
  bootstrap: [AppComponent]

})
export class AppModule { }

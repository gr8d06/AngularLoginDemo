import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//App imports
import { AppComponent } from './app.component';

//Third Party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

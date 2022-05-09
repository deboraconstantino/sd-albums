import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    ToolbarComponent
  ],
  imports: [
    SharedModule,
    MatToolbarModule,
    HttpClientModule
  ],
  exports: [
    ToolbarComponent
  ],
  providers: [],
})
export class CoreModule { }

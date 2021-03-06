import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { MilesConverterPipe } from './pipes/miles-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SecondFormComponent,
    MilesConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

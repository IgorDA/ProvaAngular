import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


import {FormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CategoriaService } from './services/categoria.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoriaService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material";
import { AddPersonComponent } from './components/add-person/add-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AddPublicacionComponent } from './components/add-publicacion/add-publicacion.component';
import { AddComentarioComponent } from './components/add-comentario/add-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    HomeComponent,
    BlogComponent,
    PublicacionComponent,
    ComentarioComponent,
    ConsultaComponent,
    AddPersonComponent,
    AddBlogComponent,
    AddPublicacionComponent,
    AddComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddPersonComponent, AddBlogComponent, AddPublicacionComponent, AddComentarioComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

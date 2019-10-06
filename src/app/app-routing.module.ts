import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ConsultaComponent } from './components/consulta/consulta.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'personas', component: PersonaComponent},
  {path:'blogs', component: BlogComponent},
  {path:'publicaciones', component: PublicacionComponent},
  {path:'comentarios', component: ComentarioComponent},
  {path:'consultas', component: ConsultaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

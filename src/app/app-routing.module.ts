import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './episodios/episodios.component';
import { InicioComponent } from './inicio/inicio.component';
import { LocacionesComponent } from './locaciones/locaciones.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'locaciones',
    component: LocacionesComponent,
  },
  {
    path: 'episodios',
    component: EpisodiosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

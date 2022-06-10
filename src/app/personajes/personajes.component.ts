import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  constructor(private api: ApiService) {}
  personajes: any = [];
  personajesRespaldo: any;
  search: any;
  ngOnInit(): void {
    this.api.getAllCharacter().subscribe((personajes) => {
      this.personajes = personajes.results;
      this.personajesRespaldo = personajes.results;
    });
  }

  onFiltrarPersonaje(q: any) {
    const busqueda = q.toLowerCase();
    if (busqueda == '') {
      this.personajes = this.personajesRespaldo;
    } else {
      this.personajes = this.personajes.filter((element: any) => {
        const nombre = element.name.toLowerCase();
        return nombre.includes(busqueda);
      });
    }
  }
}

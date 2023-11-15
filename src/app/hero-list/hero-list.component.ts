import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list', //Selector del componente
  templateUrl: './hero-list.component.html', //Plantilla html del componente
  styleUrls: ['./hero-list.component.css'] //Estilos del componente
})
export class HeroListComponent {
  // Propiedades del componente:
  heroes: string[] = ['Hero 1', 'Hero 2', 'Hero 3'];

  // Método del componente
  logHero(hero:string){
    console.log(`Selected Hero: ${hero}`);
  }
}
